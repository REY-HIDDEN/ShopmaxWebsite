const db = require('./config/db');

async function checkSchema() {
    try {
        const [users] = await db.query('SHOW CREATE TABLE users');
        console.log('--- users ---');
        console.log(users[0]['Create Table']);

        const [products] = await db.query('SHOW CREATE TABLE products');
        console.log('--- products ---');
        console.log(products[0]['Create Table']);

        const [categories] = await db.query('SHOW CREATE TABLE categories');
        console.log('--- categories ---');
        console.log(categories[0]['Create Table']);

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

checkSchema();
