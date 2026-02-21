-- =============================================================
--  ShopMax E-Commerce Platform — Full Database Setup
--  Database : shop_v2
--  Engine   : MySQL 8+ / MariaDB 10.4+
--  Run once : mysql -u root -p < shop.sql
-- =============================================================

-- ── 1. Database ───────────────────────────────────────────────
CREATE DATABASE IF NOT EXISTS shop_v2
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE shop_v2;

-- ── 2. Categories ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS categories (
    id   INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uq_categories_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── 3. Users ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
    fullname   VARCHAR(255) NOT NULL,
    email      VARCHAR(255) NOT NULL,
    password   VARCHAR(255) NOT NULL,
    role       ENUM('admin','user','buyer','seller','both') NOT NULL DEFAULT 'user',
    company    VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── 4. Products ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS product(
    id             INT UNSIGNED   NOT NULL AUTO_INCREMENT,
    name           VARCHAR(255)   NOT NULL,
    description    TEXT           DEFAULT NULL,
    price          DECIMAL(10,2)  NOT NULL,
    original_price DECIMAL(10,2)  DEFAULT NULL,
    rating         DECIMAL(2,1)   NOT NULL DEFAULT 0.0,
    reviews        INT            NOT NULL DEFAULT 0,
    colors         JSON           DEFAULT NULL,
    sizes          JSON           DEFAULT NULL,
    badge          VARCHAR(50)    DEFAULT NULL,
    sku            VARCHAR(100)   DEFAULT NULL,
    stock_qty      INT            NOT NULL DEFAULT 0,
    category_id    INT UNSIGNED   DEFAULT NULL,
    image          VARCHAR(500)   DEFAULT NULL,
    created_at     TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_products_sku (sku),
    KEY idx_products_category_id (category_id),
    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id) REFERENCES categories (id)
        ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── 5. Orders ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
    id           INT UNSIGNED   NOT NULL AUTO_INCREMENT,
    user_id      INT UNSIGNED   NOT NULL,
    total_amount DECIMAL(10,2)  NOT NULL,
    status       ENUM('pending','processing','shipped','delivered','cancelled')
                               NOT NULL DEFAULT 'pending',
    created_at   TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_orders_user_id    (user_id),
    KEY idx_orders_created_at (created_at),
    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id) REFERENCES users (id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── 6. Order Items ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS order_items (
    id         INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    order_id   INT UNSIGNED  NOT NULL,
    product_id INT UNSIGNED  NOT NULL,
    quantity   INT           NOT NULL DEFAULT 1,
    price      DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    KEY idx_oi_order_id   (order_id),
    KEY idx_oi_product_id (product_id),
    CONSTRAINT fk_oi_order
        FOREIGN KEY (order_id) REFERENCES orders (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_oi_product
        FOREIGN KEY (product_id) REFERENCES products (id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================
--  SEED DATA
-- =============================================================

-- ── Categories ────────────────────────────────────────────────
INSERT IGNORE INTO categories (name, slug) VALUES
    ('Electronics',    'electronics'),
    ('Beauty',         'beauty'),
    ('Fashion',        'fashion'),
    ('Home and Garden','home'),
    ('Sport',          'sports'),
    ('Toys and Games', 'toys');

-- ── Admin User ────────────────────────────────────────────────
-- Default password: admin123
-- (hashed with bcrypt, cost factor 10)
-- Change this password immediately after first login!
INSERT IGNORE INTO users (fullname, email, password, role) VALUES (
    'ShopMax Admin',
    'admin@shopmax.com',
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lHHi',
    'admin'
);

-- ── Products — Electronics ────────────────────────────────────
INSERT IGNORE INTO products (id, name, description, price, original_price, rating, reviews, badge, stock_qty, category_id, image) VALUES
(1,  'Gaming MotherBoard A520M-A Pro',
     'AMD AM4 socket gaming motherboard with PCIe 3.0, dual M.2 slots and USB 3.2 Gen 1.',
     200.00, 249.99, 4.5, 312, 'sale', 50,
     (SELECT id FROM categories WHERE slug='electronics'),
     'https://m.media-amazon.com/images/I/71auet7RqFL._AC_UY327_FMwebp_QL65_.jpg'),

(2,  '70W USB-C Power Adapter',
     'Universal 70W GaN USB-C charger compatible with laptops, tablets, and smartphones.',
     53.69, 69.99, 4.3, 198, 'sale', 80,
     (SELECT id FROM categories WHERE slug='electronics'),
     'https://m.media-amazon.com/images/I/51wdbbvlXhL._AC_UY327_FMwebp_QL65_.jpg'),

(3,  '6 FT PC Computer Power Cord',
     'High quality 3-prong AC power cord for Dell OptiPlex, Alienware, XPS, HP Elite, Lenovo.',
     9.99, 14.99, 4.6, 521, 'sale', 200,
     (SELECT id FROM categories WHERE slug='electronics'),
     'https://m.media-amazon.com/images/I/51iYyluRMcL._AC_UY327_FMwebp_QL65_.jpg'),

(4,  'Wireless Mechanical Keyboard',
     'Compact TKL wireless mechanical keyboard with RGB backlighting and 2.4GHz dongle.',
     79.99, 99.99, 4.4, 275, 'hot', 60,
     (SELECT id FROM categories WHERE slug='electronics'),
     'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop'),

(5,  'Noise-Cancelling Wireless Headphones',
     '40-hour battery life, active noise cancellation and foldable design for travel.',
     149.99, 199.99, 4.7, 640, 'hot', 45,
     (SELECT id FROM categories WHERE slug='electronics'),
     'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop');

-- ── Products — Fashion ────────────────────────────────────────
INSERT IGNORE INTO products (id, name, description, price, original_price, rating, reviews, badge, stock_qty, category_id, image) VALUES
(17, 'Adults Plain Cotton T-Shirt — 2 Pack',
     '100% cotton plain tee, pre-shrunk, available in multiple colours.',
     10.90, 15.99, 4.2, 890, 'sale', 300,
     (SELECT id FROM categories WHERE slug='fashion'),
     'https://m.media-amazon.com/images/I/81eHhbn-kNL._AC_UL480_FMwebp_QL65_.jpg'),

(18, 'Slim Fit Chino Trousers',
     'Stretch cotton slim fit chinos, ideal for casual and smart-casual wear.',
     34.99, 49.99, 4.3, 412, NULL, 150,
     (SELECT id FROM categories WHERE slug='fashion'),
     'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop'),

(19, 'Classic White Sneakers',
     'Minimalist genuine leather sneakers with cushioned insole.',
     59.99, 79.99, 4.5, 765, 'hot', 100,
     (SELECT id FROM categories WHERE slug='fashion'),
     'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop');

-- ── Products — Home and Garden ────────────────────────────────
INSERT IGNORE INTO products (id, name, description, price, original_price, rating, reviews, badge, stock_qty, category_id, image) VALUES
(36, 'Modern LED Desk Lamp',
     'Touch-dimming LED desk lamp with 5 colour temperatures and USB charging port.',
     49.99, 64.99, 4.6, 334, NULL, 70,
     (SELECT id FROM categories WHERE slug='home'),
     'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop'),

(37, 'Ceramic Coffee Mug Set — 4pcs',
     'Hand-crafted ceramic mugs, microwave and dishwasher safe, 350ml each.',
     24.99, 34.99, 4.4, 211, 'sale', 120,
     (SELECT id FROM categories WHERE slug='home'),
     'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop'),

(38, 'Indoor Herb Garden Starter Kit',
     'Complete kit with 6 herb seed varieties, biodegradable pots and organic soil.',
     19.99, 27.99, 4.5, 548, NULL, 90,
     (SELECT id FROM categories WHERE slug='home'),
     'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop');

-- ── Products — Sport ──────────────────────────────────────────
INSERT IGNORE INTO products (id, name, description, price, original_price, rating, reviews, badge, stock_qty, category_id, image) VALUES
(44, 'Premium Yoga Mat',
     'Non-slip 6mm thick TPE yoga mat with alignment lines and carrying strap.',
     34.99, 44.99, 4.7, 920, NULL, 130,
     (SELECT id FROM categories WHERE slug='sports'),
     'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop'),

(45, 'Adjustable Dumbbell Set 2–24 kg',
     'Space-saving quick-adjust dumbbell set, replaces 15 pairs of traditional dumbbells.',
     189.99, 239.99, 4.8, 1100, 'hot', 35,
     (SELECT id FROM categories WHERE slug='sports'),
     'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=400&fit=crop'),

(46, 'Running Shoes — Lightweight',
     'Breathable mesh upper with responsive foam midsole, suitable for road running.',
     89.99, 119.99, 4.5, 673, NULL, 80,
     (SELECT id FROM categories WHERE slug='sports'),
     'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop');

-- ── Products — Beauty ─────────────────────────────────────────
INSERT IGNORE INTO products (id, name, description, price, original_price, rating, reviews, badge, stock_qty, category_id, image) VALUES
(55, 'Skincare Essentials Kit',
     'Complete daily skincare routine: cleanser, toner, serum, moisturiser and SPF 50 sunscreen.',
     79.99, 99.99, 4.6, 482, 'hot', 65,
     (SELECT id FROM categories WHERE slug='beauty'),
     'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop'),

(56, 'Vitamin C Brightening Serum',
     '15% stable Vitamin C + Hyaluronic Acid formula in an airless pump bottle.',
     29.99, 39.99, 4.4, 318, 'sale', 110,
     (SELECT id FROM categories WHERE slug='beauty'),
     'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop'),

(57, 'Electric Face Cleanser Brush',
     'Soft silicone bristles with 3 speed settings and waterproof body.',
     24.99, 34.99, 4.3, 257, NULL, 95,
     (SELECT id FROM categories WHERE slug='beauty'),
     'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop');

-- ── Products — Toys and Games ─────────────────────────────────
INSERT IGNORE INTO products (id, name, description, price, original_price, rating, reviews, badge, stock_qty, category_id, image) VALUES
(65, 'Building Blocks Set 500pc',
     'Compatible building brick set, 500 pieces, suitable for ages 6+.',
     49.99, 64.99, 4.8, 1345, 'hot', 180,
     (SELECT id FROM categories WHERE slug='toys'),
     'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop'),

(66, 'Remote Control Racing Car',
     '1:16 scale RC car, 30+ km/h top speed, 2.4 GHz control, rechargeable battery.',
     44.99, 59.99, 4.5, 798, 'sale', 75,
     (SELECT id FROM categories WHERE slug='toys'),
     'https://images.unsplash.com/photo-1531565637446-32307b194362?w=400&h=400&fit=crop'),

(67, 'Educational Science Kit for Kids',
     '20 hands-on STEM experiments covering chemistry, physics and biology.',
     34.99, 44.99, 4.6, 421, NULL, 90,
     (SELECT id FROM categories WHERE slug='toys'),
     'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop');

-- =============================================================
--  END OF SETUP
--  To import:  mysql -u root -p < shop.sql
--  To verify:  USE shop_v2; SHOW TABLES;
-- =============================================================
