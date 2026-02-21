/**
 * add_order_indexes.js
 * Run once: node add_order_indexes.js
 * Adds indexes to speed up the orders queries.
 */
const db = require('./config/db');

async function addIndexes() {
    console.log('Adding performance indexes...');

    const indexes = [
        { name: 'idx_oi_order_id', sql: 'CREATE INDEX idx_oi_order_id   ON order_items (order_id)' },
        { name: 'idx_oi_product_id', sql: 'CREATE INDEX idx_oi_product_id ON order_items (product_id)' },
        { name: 'idx_orders_user_id', sql: 'CREATE INDEX idx_orders_user_id    ON orders (user_id)' },
        { name: 'idx_orders_created_at', sql: 'CREATE INDEX idx_orders_created_at ON orders (created_at)' },
    ];

    for (const idx of indexes) {
        try {
            await db.query(idx.sql);
            console.log(`  ✔ Created: ${idx.name}`);
        } catch (e) {
            if (e.code === 'ER_DUP_KEYNAME') {
                console.log(`  ⚠ Already exists (skipping): ${idx.name}`);
            } else {
                console.error(`  ✘ Failed ${idx.name}: ${e.message}`);
            }
        }
    }

    console.log('\nDone! Indexes are in place.');
    process.exit(0);
}

addIndexes();
