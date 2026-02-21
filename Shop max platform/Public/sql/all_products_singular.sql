-- SQL Insert script for all 71 products (Singular Table: product)
-- Corrected JSON escaping for compatibility
USE shop_v2;

INSERT INTO product
(name, description, price, original_price, rating, reviews, colors, sizes, badge, category_id, image)
VALUES
('6 FT PC Computer Power Cord Optilex Alienware XPS HP Elite Pavilion Envy Acer Lenovo',
 '[Compatible Models]: High quality 3 prong AC power cord work for Dell OptiPlex Alienware XPS HP Elite Pavilion Envy Acer Lenovo Desktop Computer. Also suitable for more electronic devices that require a 3 prong AC power cord',
 9.99, 10.9, 4.9, 21, '["#000000"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/51iYyluRMcL._AC_UY327_FMwebp_QL65_.jpg'),

('A pro Gaming MotherBoard A520M-A',
 'Make your Day happy through Playing Funny Games by using  MotherBoard A520M-A PRO Available in one color',
 200, 199.99, 4.3, 102, '["#000000"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/71auet7RqFL._AC_UY327_FMwebp_QL65_.jpg'),

('70W USB-C Power Adapter',
 'The 70W USB-C Power Adapter offers fast, efficient charging at home, in the office or on the go.',
 53.69, 63.69, 4.8, 788, '["#f5f5f5"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/51wdbbvlXhL._AC_UY327_FMwebp_QL65_.jpg'),

('MacBookAir Pro 16.2',
 'It is a large, top-tier Apple laptop for professionals, combining maximum performance with a stunning 16-inch display.',
 4.999, 5.999, 4.3, 7, '["#00040a"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/41S2OSRfBuL._AC_UY327_FMwebp_QL65_.jpg'),

('Apple MacBookPro Air',
 'MacBook Pro: The thicker, heavier powerhouse with fans for cooling, designed for demanding professional creative work (video editing, 3D).',
 4199, 3199, 5, 6, '["#00040a"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/41TDJuWLQ2L._AC_UY327_FMwebp_QL65_.jpg'),

('Apple 2025 MacBookAir 13-inch',
 'Move under the Real World Moving Internet Using Apple 2025 MacBookAir 13-inch',
 949, 899, 5, 40, '["#00040a"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/71igjFyr56L._AC_UY327_FMwebp_QL65_.jpg'),

('Apple Macbook Air 13',
 'Move under the Real World Moving Internet Using the Apple Mac BookAir 13',
 999.01, 899, 3.8, 17, '["#00040a","#9697994b"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/51Hh+1dBs7L._AC_UY327_FMwebp_QL65_.jpg'),

('Sumsang Galaxy Buds FE WirelessNoise Bluetooth Ear Buds',
 'Now you can communicate Fleely with Someone in another language Using the Sumsang Galaxy wireless Buds',
 58.67, 68.57, 4.3, 8, '["#000000","#e6e7e9"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/613cPuOz5OL._AC_UY327_FMwebp_QL65_.jpg'),

('Beats Powerbeats Pro 2',
 'Premium PowerBeats pro the Headphone stay put during Workout.',
 139, 129, 4.6, 14, '["#101318","#ffffff","#f04545"]', '[]', 'sale', 1,
 'https://m.media-amazon.com/images/I/41HKPiu-O-L._AC_UY327_FMwebp_QL65_.jpg'),

('Wireless Bluetooth Headphones Pro',
 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality.',
 149.99, 199.99, 4.5, 245, '["#1e293b","#64748b","#1e40af"]', '[]', 'sale', 1,
 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'),

('Smart Watch Series X',
 'Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration.',
 299.99, 399.99, 4.8, 512, '["#1e293b","#fcd34d","#ef4444"]', '["40mm","44mm","46mm"]', 'hot', 1,
 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'),

('Ultra HD 4K Smart TV 55"',
 'Stunning 4K UHD smart TV with HDR support, built-in streaming apps, and voice control.',
 599.99, 799.99, 4.6, 328, '["#1e293b"]', '[]', 'sale', 1,
 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop'),

('Professional Gaming Laptop',
 'High-performance gaming laptop with RTX graphics, 144Hz display, and advanced cooling system.',
 1299.99, 1599.99, 4.9, 187, '["#1e293b"]', '["15\\"","17\\""]', 'new', 1,
 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop'),

('Wireless Charging Pad',
 'Fast wireless charging pad compatible with all Qi-enabled devices.',
 39.99, 49.99, 4.3, 156, '["#1e293b","#ffffff"]', '[]', NULL, 1,
 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&h=400&fit=crop'),

('Portable Bluetooth Speaker',
 'Waterproof portable speaker with 360┬░ sound and 12-hour battery life.',
 79.99, 99.99, 4.4, 234, '["#1e293b","#3b82f6","#ef4444"]', '[]', NULL, 1,
 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'),

('Mechanical Gaming Keyboard',
 'RGB mechanical keyboard with customizable switches and programmable keys.',
 129.99, 159.99, 4.7, 298, '["#1e293b"]', '["Full Size","TKL"]', 'hot', 1,
 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop'),

('Wireless Gaming Mouse',
 'High-precision wireless mouse with adjustable DPI and ergonomic design.',
 69.99, 89.99, 4.6, 412, '["#ffffff","#000000"]', '[]', NULL, 1,
 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop'),

('Adults Plain Cotton T-Shirt - 2 Pack',
 'Soft and  breathable cotton t-shirt pack for adults. Available in multiple colors and sizes.',
 10.9, 15.9, 4.6, 123, '["#ffffff","#1e293b","#3b82f6","#ef4444","#10b981"]', '["S","M","L","XL","XXL"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/81eHhbn-kNL._AC_UL480_FMwebp_QL65_.jpg'),

('Plain Hooded Fleece Sweatshirt',
 'Cozy and warm hodden fleece sweatshirt for adults. Available in various colors and sizes.',
 29.91, 29.8, 4.5, 87, '["#ffffff","#1e293b","#3b82f6","#ef4444","#10b981"]', '["S","M","L","XL","XXL"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/61XQ+8z9PhL._AC_UL480_FMwebp_QL65_.jpg'),

('Women''s Chiffon Beachwear Cover Up - Black',
 'Lightweight and stylish chiffon beach cover-up for',
 20.7, 25.9, 4.7, 123, '["#000000"]', '["S","M","L","XL"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/61h7Px8OyrL._AC_UL480_FMwebp_QL65_.jpg'),

('Men''s Golf Polo T-Shirt - Blue',
 'Comfortable and stylish slim-fit shorts for men, perfect for summer. Available in multiple colors and sizes.',
 25.99, 35.99, 4.5, 98, '["#1e293b","#64748b","#1e40af","#ef4444","#10b981"]', '["30","32","34","36","38"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/61fBmgBbnpL._AC_UL480_FMwebp_QL65_.jpg'),

('Waterproof knit Athlatic Sneakers - White',
 'Durable  and stylish waterproof knit athletic sneakers for men. Avaliable in multiple colos and sizez.',
 58.99, 69.99, 4.8, 156, '["#ffffff","#1e293b","#3b82f6","#ef4444","#10b981"]', '["7","8","9","10","11","12"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/61p9eCxlh3L._AC_UL480_FMwebp_QL65_.jpg'),

('Straw Lifeguard Sun Hat',
 'Classic straw lifeguard sun hat with wide brim for maximum sun protection. perfect for beach and outdoor activities. Available in one size fites all.',
 20, 35, 5.6, 124, '["#fcd34d","#ef4444","#1e293b"]', '["One Size"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/81bhdnKTiNL._AC_SX679_.jpg'),

('Women''s Chunky Cable Beanie - Gray',
 'Warm and stylish chunky cable knit beanie for women. Available in multiple colors and sizes.',
 10.01, 15.99, 4.2, 77, '["#64748b","#1e293b","#f59e0b"]', '["S","M","L","XL"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/61DENgXAosL._AC_UL480_FMwebp_QL65_.jpg'),

('Double Oval Twist French Wire Earrings - Gold',
 'Elegant double oval twist French wire earring in gold finish. perfect for everyday wear and special occasions. Available in one size.',
 11.01, 15.99, 49, 15, '["#fcd34d","#ef4444","#1e293b"]', '[]', 'sale', 3,
 'https://m.media-amazon.com/images/I/6119Tm7oFTL._AC_UL480_FMwebp_QL65_.jpg'),

('Adults Plain Cotton T-Shirt - 3 Pack',
 'Soft and  breathable cotton t-shirt pack for adults. Available in multiple colors and sizes.',
 30.9, 25.9, 4.6, 123, '["#ffffff","#1e293b","#3b82f6","#ef4444","#10b981"]', '["S","M","L","XL","XXL"]', 'sale', 3,
 'https://m.media-amazon.com/images/I/81eHhbn-kNL._AC_UL480_FMwebp_QL65_.jpg'),

('Premium Cotton T-Shirt',
 '100% organic cotton t-shirt with a comfortable fit and durable quality.',
 29.99, 39.99, 4.4, 567, '["#ffffff","#1e293b","#3b82f6","#ef4444","#10b981"]', '["S","M","L","XL","XXL"]', 'sale', 3,
 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'),

('Classic Denim Jacket',
 'Timeless denim jacket with a modern fit and premium stitching.',
 89.99, 119.99, 4.6, 234, '["#64748b"]', '["S","M","L","XL"]', NULL, 3,
 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop'),

('Running Sneakers Ultra',
 'Lightweight running shoes with advanced cushioning and breathable mesh.',
 129.99, 159.99, 4.8, 445, '["#ef4444","#1e293b","#3b82f6"]', '["7","8","9","10","11","12"]', 'hot', 3,
 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'),

('Leather Casual Wallet',
 'Genuine leather wallet with RFID protection and multiple card slots.',
 49.99, 69.99, 4.5, 312, '["#3d2817","#1e293b"]', '[]', 'sale', 3,
 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop'),

('Wool Winter Sweater',
 'Soft merino wool sweater perfect for cold weather layering.',
 79.99, 99.99, 4.7, 189, '["#1e293b","#64748b","#b45309"]', '["S","M","L","XL"]', 'new', 3,
 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop'),

('Classic Aviator Sunglasses',
 'Authentic aviator sunglasses with UV400 protection and gold accents.',
 149.99, 199.99, 4.6, 278, '["#1e293b","#fcd34d","#3b82f6"]', '[]', NULL, 3,
 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop'),

('Canvas Messenger Bag',
 'Durable canvas messenger bag with laptop compartment and multiple pockets.',
 59.99, 79.99, 4.4, 156, '["#1e293b","#3d5a80","#b45309"]', '[]', NULL, 3,
 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop'),

('Slim Fit Dress Pants',
 'Elegant slim fit dress pants perfect for office or formal occasions.',
 69.99, 89.99, 4.3, 198, '["#1e293b","#64748b","#1e40af"]', '["30","32","34","36","38"]', NULL, 3,
 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop'),

('Modern LED Desk Lamp',
 'Adjustable LED desk lamp with multiple brightness levels and USB charging port.',
 49.99, 69.99, 4.5, 234, '["#1e293b","#ffffff","#3b82f6"]', '[]', NULL, 4,
 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop'),

('Ceramic Coffee Mug Set',
 'Set of 4 ceramic mugs with modern design and comfortable grip.',
 34.99, 44.99, 4.6, 456, '["#ffffff","#1e293b","#3b82f6"]', '[]', 'new', 4,
 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop'),

('Indoor Plant Pot Set',
 'Set of 3 modern plant pots with drainage holes and bamboo trays.',
 39.99, 54.99, 4.4, 189, '["#ffffff","#1e293b","#b45309"]', '["Small","Medium","Large"]', NULL, 4,
 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop'),

('Soft Microfiber Bedding Set',
 'Luxurious microfiber bedding set with pillowcases and fitted sheet.',
 89.99, 119.99, 4.8, 567, '["#ffffff","#1e293b","#b8c5d6","#e2e8f0"]', '["Twin","Full","Queen","King"]', 'hot', 4,
 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop'),

('Scented Candle Collection',
 'Set of 3 scented candles with natural soy wax and essential oils.',
 29.99, 39.99, 4.7, 345, '["#fcd34d","#ef4444","#10b981"]', '[]', 'sale', 4,
 'https://images.unsplash.com/photo-1763888476700-aaf0881361da?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Kitchen Knife Set Pro',
 'Professional 6-piece knife set with wooden block and sharpening tool.',
 79.99, 99.99, 4.6, 234, '["#1e293b"]', '[]', NULL, 4,
 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop'),

('Throw Blanket Cozy',
 'Ultra-soft throw blanket perfect for couch or bed.',
 44.99, 59.99, 4.5, 278, '["#1e293b","#64748b","#b8c5d6","#b45309"]', '["50\\" x 60\\"","60\\" x 80\\""]', NULL, 4,
 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop'),

('Wall Mounted Shelf Set',
 'Modern floating shelf set with invisible mounting system.',
 49.99, 69.99, 4.3, 167, '["#ffffff","#1e293b","#b45309"]', '["3-Piece","5-Piece"]', NULL, 4,
 'https://plus.unsplash.com/premium_photo-1748106667459-2f154e4ef1b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Yoga Mat Premium',
 'Non-slip yoga mat with extra cushioning and carrying strap.',
 34.99, 44.99, 4.6, 456, '["#3b82f6","#10b981","#ef4444","#1e293b"]', '["24\\" x 68\\"","26\\" x 72\\""]', NULL, 5,
 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop'),

('Home Gym Folding Smart Multi-function Treadmills Motorized Electric Treadmill',
 'Build your body through making the sport by using the  Treadmills Motorized Electric Treadmill',
 599, 600.6, 2.9, 700, '["#3b82f6","#10b981","#ef4444","#1e293b"]', '[]', 'sale', 5,
 'https://m.media-amazon.com/images/I/61S6kLrj-gL._AC_UY327_FMwebp_QL65_.jpg'),

('Nordic Track T Series',
 'Build the strength through use the Nordic Track Series',
 759.05, 859.01, 4.3, 320, '["#101111"]', '[]', 'sale', 5,
 'https://m.media-amazon.com/images/I/719uh1Um6aL._AC_UY327_FMwebp_QL65_.jpg'),

('Xterra Fitness ERG 160 Rower',
 'To Also Dencrease the body fitness by usind the  Xterra Fitness ERG 160 power Available in all colors and sizes',
 305.88, 405.87, 4.3, 284, '["#101111"]', '[]', 'sale', 5,
 'https://m.media-amazon.com/images/I/61ZSNfZ5NZL._AC_UY327_FMwebp_QL65_.jpg'),

('Adjustable Dumbbell Set',
 'Space-saving adjustable dumbbells from 5-52.5 lbs with quick-change system.',
 199.99, 279.99, 4.8, 289, '["#1e293b"]', '[]', 'hot', 5,
 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop'),

('Fitness Tracker Band',
 'Waterproof fitness tracker with heart rate monitor and sleep tracking.',
 49.99, 69.99, 4.4, 567, '["#1e293b","#3b82f6","#ef4444","#10b981"]', '["S/M","L/XL"]', 'sale', 5,
 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop'),

('Resistance Bands Set',
 'Complete set of 5 resistance bands with different resistance levels.',
 24.99, 34.99, 4.5, 378, '["#3b82f6","#10b981","#ef4444","#fcd34d","#ef4444"]', '[]', NULL, 5,
 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop'),

('Cycling Helmet Pro',
 'Aerodynamic cycling helmet with ventilation and LED lights.',
 69.99, 89.99, 4.7, 234, '["#1e293b","#ef4444","#3b82f6"]', '["S","M","L"]', NULL, 5,
 'https://images.unsplash.com/photo-1590093105704-fddd246ab64f?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Swimming Goggles Pro',
 'Anti-fog swimming goggles with UV protection and comfortable seal.',
 29.99, 39.99, 4.4, 189, '["#1e293b","#3b82f6","#10b981"]', '[]', NULL, 5,
 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop'),

('Basketball Official Size',
 'Official size indoor/outdoor basketball with superior grip.',
 29.99, 39.99, 4.5, 267, '["#f97316","#1e293b"]', '[]', NULL, 5,
 'https://images.unsplash.com/photo-1676315636766-7b129985c537?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Tennis Racket Kit',
 'Professional tennis racket with grip, strings, and carrying case.',
 89.99, 119.99, 4.6, 156, '["#1e293b","#3b82f6"]', '["L2","L3","L4"]', 'new', 5,
 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=400&fit=crop'),

('Skincare Essentials Kit',
 'Complete skincare routine with cleanser, toner, serum, and moisturizer.',
 79.99, 99.99, 4.7, 456, '["#ffffff"]', '[]', 'hot', 2,
 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop'),

('Double Oval Twist French Wire Earrings - Gold',
 'Take  care to your face by wearing  the Gold sky Circle stud Earrings',
 68.99, 38, 5, 15, '["#1e293b","#fcd34d","#ef4444"]', '[]', 'hot', 2,
 'https://m.media-amazon.com/images/I/6119Tm7oFTL._AC_UL320_.jpg'),

('Vanity Mirror with Heavy Base - Chrome',
 'Two-sided circular mirror has an 7-inch diameter and features a smooth 360-degree swivel design.',
 33.55, 38, 7, 55, '["#ffffff"]', '[]', 'hot', 2,
 'https://m.media-amazon.com/images/I/51TTKmBRWbL._AC_UL480_FMwebp_QL65_.jpg'),

('Premium Hair Dryer',
 'Ionic hair dryer with multiple heat settings and concentrator.',
 129.99, 159.99, 4.6, 312, '["#1e293b","#fcd34d","#ef4444"]', '[]', NULL, 2,
 'https://plus.unsplash.com/premium_photo-1677838848125-a322d41868f3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Makeup Brush Set',
 '12-piece professional makeup brush set with synthetic bristles.',
 44.99, 59.99, 4.5, 567, '["#1e293b","#b8c5d6","#fcd34d"]', '[]', 'sale', 2,
 'https://images.unsplash.com/photo-1693588516818-a4cbe7b49ae2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Perfume Eau de Parfum',
 'Luxury long-lasting perfume with notes of florals and musk.',
 89.99, 119.99, 4.8, 234, '["#fcd34d","#ef4444","#1e293b"]', '["50ml","100ml"]', 'new', 2,
 'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=400&h=400&fit=crop'),

('Electric Facial Cleanser',
 'Sonic facial cleanser with multiple brush heads and timers.',
 69.99, 89.99, 4.4, 378, '["#ffffff","#1e293b","#fcd34d"]', '[]', NULL, 2,
 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop'),

('Nail Care Kit Complete',
 'Professional nail care kit with tools for manicure and pedicure.',
 34.99, 44.99, 4.3, 267, '["#1e293b","#fcd34d","#ef4444"]', '[]', NULL, 2,
 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop'),

('Organic Face Mask Set',
 'Set of 7 organic face masks for different skin concerns.',
 29.99, 39.99, 4.6, 456, '["#ffffff"]', '[]', 'sale', 2,
 'https://m.media-amazon.com/images/I/81trrUYtksL._AC_UL320_.jpg'),

('Hair Styling Clay',
 'Strong hold hair clay with natural ingredients and matte finish.',
 24.99, 32.99, 4.4, 189, '["#1e293b"]', '["50g","100g"]', NULL, 2,
 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=400&fit=crop'),

('Building Blocks Set 500pc',
 'Creative building blocks set with 500 pieces in various colors.',
 49.99, 69.99, 4.8, 678, '["#ef4444","#3b82f6","#10b981","#fcd34d"]', '[]', 'hot', 6,
 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop'),

('Board Game Collection',
 'Classic family board game for 2-6 players. Ages 8+.',
 39.99, 54.99, 4.6, 345, '["#1e293b"]', '[]', NULL, 6,
 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop'),

('Remote Control Car',
 'High-speed RC car with 2.4GHz remote and stunt capabilities.',
 59.99, 79.99, 4.5, 456, '["#ef4444","#3b82f6","#1e293b"]', '[]', 'sale', 6,
 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=400&fit=crop'),

('Puzzle 1000 Pieces',
 'Beautiful 1000-piece puzzle with stunning landscape design.',
 24.99, 34.99, 4.4, 289, '["#3b82f6"]', '[]', NULL, 6,
 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

('Action Figure Set',
 'Collectible action figure set with accessories. 6" scale.',
 34.99, 44.99, 4.6, 234, '["#1e293b","#3b82f6"]', '[]', 'new', 6,
 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop'),

('Educational Science Kit',
 'Hands-on science experiments kit for young explorers. Ages 8+.',
 29.99, 39.99, 4.7, 378, '["#3b82f6","#10b981"]', '[]', NULL, 6,
 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop'),

('Plush Teddy Bear Larges',
 'Extra soft and huggable teddy bear. 18" tall.',
 39.99, 49.99, 4.8, 567, '["#b45309","#1e293b","#fcd34d"]', '["12\\"","18\\"","24\\""]', 'hot', 6,
 'https://m.media-amazon.com/images/I/81ubNih2WeL._AC_UL480_FMwebp_QL65_.jpg'),

('Art Drawing Set Pro',
 'Professional drawing set with pencils, markers, and sketchbook.',
 44.99, 59.99, 4.5, 234, '["#1e293b"]', '[]', NULL, 6,
 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop');
