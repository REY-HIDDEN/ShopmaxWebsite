const db = require('./config/db');

async function updateSchema() {
    try {
        console.log('Updating orders table schema...');
        
        // Add payment_method column
        await db.query(`
            ALTER TABLE orders 
            ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50) DEFAULT 'card' AFTER total_amount,
            ADD COLUMN IF NOT EXISTS payment_status VARCHAR(50) DEFAULT 'pending' AFTER payment_method
        `);

        console.log('Schema updated successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Schema update failed!');
        console.error(error);
        process.exit(1);
    }
}

updateSchema();
