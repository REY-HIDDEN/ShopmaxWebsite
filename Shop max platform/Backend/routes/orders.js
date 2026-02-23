const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

// ── Create a new order ────────────────────────────────────────────────────────
router.post('/', authMiddleware, async (req, res) => {
    const { items, total_amount, payment_method } = req.body;
    const user_id = req.user.id;

    if (!items || !items.length || !total_amount) {
        return res.status(400).json({ message: 'Invalid order data' });
    }

    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        const [orderResult] = await connection.query(
            'INSERT INTO orders (user_id, total_amount, payment_method) VALUES (?, ?, ?)',
            [user_id, total_amount, payment_method || 'card']
        );
        const orderId = orderResult.insertId;

        const itemValues = items.map(item => [
            orderId,
            item.id,
            item.quantity,
            item.price
        ]);

        await connection.query(
            'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?',
            [itemValues]
        );

        await connection.commit();
        res.status(201).json({ message: 'Order created successfully', orderId });
    } catch (error) {
        await connection.rollback();
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    } finally {
        connection.release();
    }
});

// ── Get user's own orders (paginated, no heavy image data) ───────────────────
router.get('/', authMiddleware, async (req, res) => {
    const user_id = req.user.id;
    const limit = parseInt(req.query.limit) || 20;
    const offset = parseInt(req.query.offset) || 0;

    try {
        const [orders] = await db.query(`
            SELECT
                o.id,
                o.total_amount,
                o.status,
                o.created_at,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'product_id', oi.product_id,
                        'name',       p.name,
                        'quantity',   oi.quantity,
                        'price',      oi.price
                    )
                ) AS items
            FROM orders o
            INNER JOIN order_items oi ON oi.order_id = o.id
            INNER JOIN products    p  ON p.id         = oi.product_id
            WHERE o.user_id = ?
            GROUP BY o.id, o.total_amount, o.status, o.created_at
            ORDER BY o.created_at DESC
            LIMIT ? OFFSET ?
        `, [user_id, limit, offset]);

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// ── Get ALL orders — admin only (paginated, lightweight) ─────────────────────
router.get('/all', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    try {
        const [orders] = await db.query(`
            SELECT
                o.id,
                o.total_amount,
                o.status,
                o.created_at,
                u.fullname  AS user_name,
                u.email     AS user_email,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'product_id', oi.product_id,
                        'name',       p.name,
                        'quantity',   oi.quantity,
                        'price',      oi.price
                    )
                ) AS items
            FROM orders o
            INNER JOIN users       u  ON u.id  = o.user_id
            INNER JOIN order_items oi ON oi.order_id = o.id
            INNER JOIN products    p  ON p.id  = oi.product_id
            GROUP BY o.id, o.total_amount, o.status, o.created_at, u.fullname, u.email
            ORDER BY o.created_at DESC
            LIMIT ? OFFSET ?
        `, [limit, offset]);

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// ── Update order status — admin only ─────────────────────────────────────────
router.patch('/:id/status', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    const { status } = req.body;
    const { id } = req.params;
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }
    try {
        await db.query('UPDATE orders SET status = ? WHERE id = ?', [status, id]);
        res.json({ message: 'Order status updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
