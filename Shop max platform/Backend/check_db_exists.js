const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    try {
        const [rows] = await connection.query('SHOW DATABASES');
        console.log('Databases:', rows.map(r => r.Database));

        const shopExists = rows.some(r => r.Database === 'shop');
        if (!shopExists) {
            console.log('Database "shop" does not exist. Creating it...');
            await connection.query('CREATE DATABASE shop');
        } else {
            console.log('Database "shop" exists.');
        }

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

checkDB();
