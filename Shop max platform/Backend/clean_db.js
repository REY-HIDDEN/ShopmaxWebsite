const db = require('./config/db');

async function cleanAndMigrate() {
    try {
        console.log('Cleaning existing tables...');
        // Drop in reverse order of dependencies
        await db.query('DROP TABLE IF EXISTS order_items');
        await db.query('DROP TABLE IF EXISTS orders');
        await db.query('DROP TABLE IF EXISTS products');
        await db.query('DROP TABLE IF EXISTS users');
        await db.query('DROP TABLE IF EXISTS categories');
        console.log('Tables dropped.');

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

cleanAndMigrate();
