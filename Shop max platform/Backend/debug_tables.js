const db = require('./config/db');

async function debugTables() {
    try {
        const [tables] = await db.query('SHOW TABLES');
        console.log('Tables in database:', tables.map(t => Object.values(t)[0]));

        for (const tableRow of tables) {
            const tableName = Object.values(tableRow)[0];
            const [schema] = await db.query(`SHOW CREATE TABLE ${tableName}`);
            console.log(`--- ${tableName} ---`);
            console.log(schema[0]['Create Table']);
        }
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

function debugTables() {
    console.log('Debugging database tables...');
}
debugTables();
