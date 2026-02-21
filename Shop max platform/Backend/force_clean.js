const db = require('./config/db');

async function forceClean() {
    const tables = ['order_items', 'orders', 'products', 'users', 'categories'];
    for (const table of tables) {
        try {
            console.log(`Dropping ${table}...`);
            await db.query(`DROP TABLE IF EXISTS ${table}`);
        } catch (e) {
            console.error(`Error dropping ${table}:`, e.message);
        }
    }
    console.log('Cleanup attempted.');
    process.exit(0);
}

forceClean();
