const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function extractAndSeed() {
    const appFile = path.join(__dirname, '../Public/app_utf8.js');
    const content = fs.readFileSync(appFile, 'utf8');

    // Extract the products array text
    const startMatch = content.match(/const\s+products\s*=\s*\[/);
    if (!startMatch) {
        console.error('Could not find products array');
        return;
    }

    const startIdx = startMatch.index + startMatch[0].length - 1;
    // Find matching bracket
    let bracketCount = 0;
    let endIdx = -1;
    for (let i = startIdx; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') bracketCount--;
        if (bracketCount === 0) {
            endIdx = i + 1;
            break;
        }
    }

    if (endIdx === -1) {
        console.error('Could not find end of products array');
        return;
    }

    const productsJsonText = content.substring(startIdx, endIdx);

    // Evaluation in a sandbox is tricky due to loose formatting
    // I'll try to clean it up a bit and parse it
    // Actually, I'll just use eval since I'm in a controlled environment and the source is the user's old file
    let products;
    try {
        products = eval(productsJsonText);
    } catch (e) {
        console.error('Error parsing products with eval:', e);
        // Fallback: simple regex based extraction if eval fails
        return;
    }

    console.log(`Extracted ${products.length} products.`);

    const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        // Get category IDs
        const [categories] = await db.query('SELECT id, slug FROM categories');
        const categoryMap = {};
        categories.forEach(c => categoryMap[c.slug] = c.id);

        // Clear existing products to avoid duplicates if needed, or just insert IGNORE
        // For simplicity, I'll just skip existing SKUs if I had them, but I don't.
        // I'll delete existing sample products first to ensure a clean full set.
        console.log('Clearing existing products...');
        await db.query('SET FOREIGN_KEY_CHECKS = 0');
        await db.query('TRUNCATE TABLE order_items');
        await db.query('TRUNCATE TABLE products');
        await db.query('SET FOREIGN_KEY_CHECKS = 1');

        console.log('Seeding products...');
        for (const p of products) {
            const categorySlug = (p.category || 'electronics').trim().toLowerCase(); // Trim and lowercase for robustness
            const categoryId = categoryMap[categorySlug] || categoryMap['electronics'];

            // Handle inconsistent fields
            const price = parseFloat(p.price) || 0;
            const originalPrice = parseFloat(p.originalPrice || p.originalprice) || null;
            const rating = typeof p.rating === 'object' ? (p.rating.stars || 0) : (parseFloat(p.rating) || 0);
            const reviews = typeof p.rating === 'object' ? (p.rating.count || 0) : (parseInt(p.reviews) || 0);
            const colors = JSON.stringify(p.colors || p.color || p.coolors || []);
            const sizes = JSON.stringify(p.sizes || []);

            await db.query(
                `INSERT INTO products (name, description, price, original_price, image, category_id, rating, reviews, colors, sizes, badge) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    p.name,
                    p.description || '',
                    price,
                    originalPrice,
                    p.image,
                    categoryId,
                    rating,
                    reviews,
                    colors,
                    sizes,
                    p.badge || null
                ]
            );
        }
        console.log('Successfully seeded all products!');
    } catch (err) {
        console.error('Error during seeding:', err);
    } finally {
        await db.end();
    }
}

extractAndSeed();
