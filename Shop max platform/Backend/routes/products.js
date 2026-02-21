const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all products
router.get('/', async (req, res) => {
    try {
        const [products] = await db.query(`
            SELECT p.*, c.slug AS category, c.name AS category_name
            FROM products p 
            LEFT JOIN categories c ON p.category_id = c.id
        `);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get products by category slug
router.get('/category/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const [products] = await db.query(`
            SELECT p.*, c.slug AS category, c.name AS category_name
            FROM products p
            JOIN categories c ON p.category_id = c.id
            WHERE c.slug = ?
        `, [slug]);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const [categories] = await db.query('SELECT * FROM categories');
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Search products
router.get('/search', async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    try {
        const query = `%${q}%`;
        const [products] = await db.query(`
            SELECT p.*, c.slug AS category, c.name AS category_name
            FROM products p 
            LEFT JOIN categories c ON p.category_id = c.id
            WHERE p.name LIKE ? OR p.description LIKE ?
        `, [query, query]);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
