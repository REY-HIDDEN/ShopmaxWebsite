const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
    try {
        console.log('Connecting to:', process.env.DB_HOST, 'as', process.env.DB_USER);
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        });
        console.log('Connected successfully!');

        await connection.query('CREATE DATABASE IF NOT EXISTS shop');
        console.log('Database "shop" verified.');

        await connection.end();
    } catch (err) {
        console.error('Connection failed:', err.message);
        console.error('Error Code:', err.code);
        console.error('Syscall:', err.syscall);
        console.error('Address:', err.address);
        console.error('Port:', err.port);
    }
}

testConnection();
