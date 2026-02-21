const db = require('./config/db');

const products = [
    // I will copy some products here for the migration script
    // To keep it simple, I'll just take the structure from app.js
    {
        id: 0,
        name: "6 FT PC Computer Power Cord Optilex Alienware XPS HP Elite Pavilion Envy Acer Lenovo",
        price: 9.99,
        category: "electronics",
        image: "https://m.media-amazon.com/images/I/51iYyluRMcL._AC_UY327_FMwebp_QL65_.jpg",
        description: "[Compatible Models]: High quality 3 prong AC power cord work for Dell OptiPlex Alienware XPS HP Elite Pavilion Envy Acer Lenovo Desktop Computer.",
        badge: "sale"
    },
    // ... more products will be added dynamically by the agent if needed
];

async function migrate() {
    try {
        console.log('Starting migration...');

        // 1. Categories Table
        console.log('Creating categories table...');
        await db.query(`
            CREATE TABLE IF NOT EXISTS categories (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                slug VARCHAR(100) NOT NULL UNIQUE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        `);

        // 2. Users Table
        console.log('Creating users table...');
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                fullname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM('admin', 'user', 'buyer', 'seller', 'both') NOT NULL DEFAULT 'user',
                company VARCHAR(255) DEFAULT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        `);

        // 3. Products Table
        console.log('Creating products table...');
        await db.query(`
            CREATE TABLE IF NOT EXISTS products (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                original_price DECIMAL(10, 2),
                rating DECIMAL(2, 1) DEFAULT 0,
                reviews INT DEFAULT 0,
                colors JSON,
                sizes JSON,
                badge VARCHAR(50),
                sku VARCHAR(100) UNIQUE,
                stock_qty INT DEFAULT 0,
                category_id INT UNSIGNED,
                image VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (category_id) REFERENCES categories(id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        `);

        // 4. Orders Table
        console.log('Creating orders table...');
        await db.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                user_id INT UNSIGNED NOT NULL,
                total_amount DECIMAL(10, 2) NOT NULL,
                status VARCHAR(50) DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        `);

        // 5. Order Items Table
        console.log('Creating order_items table...');
        await db.query(`
            CREATE TABLE IF NOT EXISTS order_items (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                order_id INT UNSIGNED NOT NULL,
                product_id INT UNSIGNED NOT NULL,
                quantity INT NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                FOREIGN KEY (order_id) REFERENCES orders(id),
                FOREIGN KEY (product_id) REFERENCES products(id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        `);

        // Seed Categories
        console.log('Seeding categories...');
        const categories = [
            { name: 'Electronics', slug: 'electronics' },
            { name: 'Beauty', slug: 'beauty' },
            { name: 'Fashion', slug: 'fashion' },
            { name: 'Home and Garden', slug: 'home' },
            { name: 'Sport', slug: 'sports' },
            { name: 'Toys and Games', slug: 'toys' }
        ];

        for (const cat of categories) {
            await db.query('INSERT IGNORE INTO categories (name, slug) VALUES (?, ?)', [cat.name, cat.slug]);
        }

        // Seed Admin User
        console.log('Seeding admin user...');
        const bcrypt = require('bcryptjs');
        const adminPassword = await bcrypt.hash('admin123', 10);
        await db.query(
            'INSERT IGNORE INTO users (fullname, email, password, role) VALUES (?, ?, ?, ?)',
            ['ShopMax Admin', 'admin@shopmax.com', adminPassword, 'admin']
        );

        // Seed Products
        console.log('Seeding products...');
        const productsToInsert = [
            { id: 1, name: "A pro Gaming MotherBoard A520M-A", price: 200.00, category: "electronics", image: "https://m.media-amazon.com/images/I/71auet7RqFL._AC_UY327_FMwebp_QL65_.jpg", description: "Gaming MotherBoard", badge: "sale" },
            { id: 2, name: "70W USB-C Power Adapter", price: 53.69, category: "electronics", image: "https://m.media-amazon.com/images/I/51wdbbvlXhL._AC_UY327_FMwebp_QL65_.jpg", description: "USB-C Power Adapter", badge: "sale" },
            { id: 17, name: "Adults Plain Cotton T-Shirt - 2 Pack", price: 10.90, category: "fashion", image: "https://m.media-amazon.com/images/I/81eHhbn-kNL._AC_UL480_FMwebp_QL65_.jpg", description: "Cotton T-Shirt", badge: "sale" },
            { id: 36, name: "Modern LED Desk Lamp", price: 49.99, category: "home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", description: "LED Desk Lamp", badge: null },
            { id: 44, name: "Yoga Mat Premium", price: 34.99, category: "sports", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop", description: "Premium Yoga Mat", badge: null },
            { id: 55, name: "Skincare Essentials Kit", price: 79.99, category: "beauty", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop", description: "Skincare Kit", badge: "hot" },
            { id: 65, name: "Building Blocks Set 500pc", price: 49.99, category: "toys", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop", description: "Building Blocks", badge: "hot" }
        ];

        for (const p of productsToInsert) {
            const [cat] = await db.query('SELECT id FROM categories WHERE slug = ?', [p.category]);
            if (cat.length > 0) {
                await db.query(`
                    INSERT INTO products (id, name, price, category_id, image, description, badge)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                    ON DUPLICATE KEY UPDATE price=VALUES(price), image=VALUES(image)
                `, [p.id, p.name, p.price, cat[0].id, p.image, p.description, p.badge]);
            }
        }

        console.log('Migration completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed!');
        console.error(error);
        process.exit(1);
    }
}

migrate();
