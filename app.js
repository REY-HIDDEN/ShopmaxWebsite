// Product Database - 40+ Products
const products = [
    // Electronics

    {
        id: 1,
        name: "Wireless Bluetooth Headphones Pro",
        category: "electronics",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.5,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        badge: "sale",
        description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality.",
        sizes: null,
        colors: ["#1e293b", "#64748b", "#1e40af"]
    },
    {

        id: 2,
        name: "Smart Watch Series X",
        category: "electronics",
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.8,
        reviews: 512,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        badge: "hot",
        description: "Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration.",
        sizes: ["40mm", "44mm", "46mm"],
        colors: ["#1e293b", "#fcd34d", "#ef4444"]
    },
    {
        id: 3,
        name: "Ultra HD 4K Smart TV 55\"",
        category: "electronics",
        price: 599.99,
        originalPrice: 799.99,
        rating: 4.6,
        reviews: 328,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        badge: "sale",
        description: "Stunning 4K UHD smart TV with HDR support, built-in streaming apps, and voice control.",
        sizes: null,
        colors: ["#1e293b"]
    },
    {
        id: 4,
        name: "Professional Gaming Laptop",
        category: "electronics",
        price: 1299.99,
        originalPrice: 1599.99,
        rating: 4.9,
        reviews: 187,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        badge: "new",
        description: "High-performance gaming laptop with RTX graphics, 144Hz display, and advanced cooling system.",
        sizes: ["15\"", "17\""],
        colors: ["#1e293b"]
    },
    {
        id: 5,
        name: "Wireless Charging Pad",
        category: "electronics",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.3,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&h=400&fit=crop",
        badge: null,
        description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
        sizes: null,
        colors: ["#1e293b", "#ffffff"]
    },
    {
        id: 6,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.4,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        badge: null,
        description: "Waterproof portable speaker with 360° sound and 12-hour battery life.",
        sizes: null,
        colors: ["#1e293b", "#3b82f6", "#ef4444"]
    },
    {
        id: 7,
        name: "Mechanical Gaming Keyboard",
        category: "electronics",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 298,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
        badge: "hot",
        description: "RGB mechanical keyboard with customizable switches and programmable keys.",
        sizes: ["Full Size", "TKL"],
        colors: ["#1e293b"]
    },
    {
        id: 8,
        name: "Wireless Gaming Mouse",
        category: "electronics",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.6,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
        badge: null,
        description: "High-precision wireless mouse with adjustable DPI and ergonomic design.",
        sizes: null,
        colors: ["#1e293b", "#3b82f6"]
    },
    
    // Fashion
    {
   id :8,
   name: "Adults Plain Cotton T-Shirt - 2 Pack",
   category: "fashion",
   price: 10.90,
   originalPrice: 15.90,
    rating: 4.6,
    reviews: 123,
    image: "https://m.media-amazon.com/images/I/81eHhbn-kNL._AC_UL480_FMwebp_QL65_.jpg",
    badge: "sale",
    description: "Soft and  breathable cotton t-shirt pack for adults. Available in multiple colors and sizes.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1e293b", "#3b82f6", "#ef4444", "#10b981"]
    },
    {
   id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
   name: "Plain Hooded Fleece Sweatshirt",
   category: "fashion",
   originalPrice: 29.80,
   price: 29.91,
   rating: 4.5,
   reviews: 87,
   image: "https://m.media-amazon.com/images/I/61XQ+8z9PhL._AC_UL480_FMwebp_QL65_.jpg",
   badge: "sale",
   description: "Cozy and warm hodden fleece sweatshirt for adults. Available in various colors and sizes.",
   sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1e293b", "#3b82f6", "#ef4444", "#10b981"] ,
    },{
   id: "5968897c-4d27-4872-89f6-5bcb052746d7",
   name: "Women's Chiffon Beachwear Cover Up - Black",
   category: "fashion",
   price:20.70,
   originalPrice: 25.90,
   rating: 4.7,
   reviews: 123,
   image:"https://m.media-amazon.com/images/I/61h7Px8OyrL._AC_UL480_FMwebp_QL65_.jpg",
   badge: "sale",
   description: "Lightweight and stylish chiffon beach cover-up for",
   sizes: ["S", "M", "L", "XL"],
   colors: ["#000000"]
    },
    {
 id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
 name: "Men's Golf Polo T-Shirt - Blue",
 category: "fashion",
 price: 25.99,
 originalPrice: 35.99,
 rating: 4.5,
 reviews: 98,
 image:"https://m.media-amazon.com/images/I/61fBmgBbnpL._AC_UL480_FMwebp_QL65_.jpg",
 badge:"sale",
 description: "Comfortable and stylish slim-fit shorts for men, perfect for summer. Available in multiple colors and sizes.",
 sizes: ["30", "32", "34", "36", "38"],
 colors: ["#1e293b", "#64748b", "#1e40af", "#ef4444", "#10b981"]
},{
id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
name: "Waterproof knit Athlatic Sneakers - White",
category: "fashion",
price: 58.99,
originalPrice: 69.99,
rating: 4.8,
reviews: 156,
image: "https://m.media-amazon.com/images/I/61p9eCxlh3L._AC_UL480_FMwebp_QL65_.jpg",
badge: "sale",
description: " Durable  and stylish waterproof knit athletic sneakers for men. Avaliable in multiple colos and sizez.",
sizes: ["7", "8", "9", "10", "11", "12"],
colors: ["#ffffff", "#1e293b", "#3b82f6", "#ef4444", "#10b981"] 
},{
id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
name: "Straw Lifeguard Sun Hat",
category: "fashion",
price: 20.00,
originalPrice: 35.00,
rating: 5.6,
reviews: 124,
image: "https://m.media-amazon.com/images/I/81bhdnKTiNL._AC_SX679_.jpg",
badge: "sale",
description: "Classic straw lifeguard sun hat with wide brim for maximum sun protection. perfect for beach and outdoor activities. Available in one size fites all.",
sizes: ["One Size"],
colors: ["#fcd34d", "#ef4444", "#1e293b"]
},{
id: "d2785924-743d-49b3-8f03-ec258e640503",
name: "Women's Chunky Cable Beanie - Gray",
category: "fashion",
price: 10.01,
originalprice: 15.99,
rating: 4.2,
reviews: 77,
image: "https://m.media-amazon.com/images/I/61DENgXAosL._AC_UL480_FMwebp_QL65_.jpg",
badge: "sale",
description: "Warm and stylish chunky cable knit beanie for women. Available in multiple colors and sizes.",
sizes: ["S", "M", "L", "XL"],
colors: ["#64748b", "#1e293b", "#f59e0b"]
},{
id: "d339adf3-e004-4c20-a120-40e8874c66cb",
name : "Double Oval Twist French Wire Earrings - Gold",
category: "fashion",
price: 11.01,
originalPrice: 15.99,
rating: 4.9,
reviews: 45,
image: "https://m.media-amazon.com/images/I/6119Tm7oFTL._AC_UL480_FMwebp_QL65_.jpg",
badge: "sale",
description: "Elegant double oval twist French wire earring in gold finish. perfect for everyday wear and special occasions. Available in one size.",
sizes: ["One Size"],
colors: ["#fcd34d", "#ef4444", "#1e293b"]
},
    {
    id: 8,
    name: "Adults Plain Cotton T-Shirt - 3 Pack",
    category: "fashion",
    price: 30.90,
    originalPrice: 25.90,
    rating: 4.6,
    reviews: 123,
    image: "https://m.media-amazon.com/images/I/81eHhbn-kNL._AC_UL480_FMwebp_QL65_.jpg",
    badge: "sale",
    description: "Soft and  breathable cotton t-shirt pack for adults. Available in multiple colors and sizes.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1e293b", "#3b82f6", "#ef4444", "#10b981"]
},
{
        id: 9,
        name: "Premium Cotton T-Shirt",
        category: "fashion",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.4,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        badge: "sale",
        description: "100% organic cotton t-shirt with a comfortable fit and durable quality.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#ffffff", "#1e293b", "#3b82f6", "#ef4444", "#10b981"]
    },
    {
        id: 10,
        name: "Classic Denim Jacket",
        category: "fashion",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
        badge: null,
        description: "Timeless denim jacket with a modern fit and premium stitching.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#64748b"]
    },
    {
        id: 11,
        name: "Running Sneakers Ultra",
        category: "fashion",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.8,
        reviews: 445,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        badge: "hot",
        description: "Lightweight running shoes with advanced cushioning and breathable mesh.",
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: ["#ef4444", "#1e293b", "#3b82f6"]
    },
    {
        id: 12,
        name: "Leather Casual Wallet",
        category: "fashion",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.5,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
        badge: "sale",
        description: "Genuine leather wallet with RFID protection and multiple card slots.",
        sizes: null,
        colors: ["#3d2817", "#1e293b"]
    },
    {
        id: 13,
        name: "Wool Winter Sweater",
        category: "fashion",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
        badge: "new",
        description: "Soft merino wool sweater perfect for cold weather layering.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#1e293b", "#64748b", "#b45309"]
    },
    {
        id: 14,
        name: "Classic Aviator Sunglasses",
        category: "fashion",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.6,
        reviews: 278,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        badge: null,
        description: "Authentic aviator sunglasses with UV400 protection and gold accents.",
        sizes: null,
        colors: ["#1e293b", "#fcd34d", "#3b82f6"]
    },
    {
        id: 15,
        name: "Canvas Messenger Bag",
        category: "fashion",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.4,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        badge: null,
        description: "Durable canvas messenger bag with laptop compartment and multiple pockets.",
        sizes: null,
        colors: ["#1e293b", "#3d5a80", "#b45309"]
    },

      {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 87
    },
    price: 19.99,
        id: 16,
        name: "Slim Fit Dress Pants",
        category: "fashion",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.3,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        badge: null,
        description: "Elegant slim fit dress pants perfect for office or formal occasions.",
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["#1e293b", "#64748b", "#1e40af"]
    },
    
    // Home & Garden
    {
        id: 17,
        name: "Modern LED Desk Lamp",
        category: "home",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        badge: null,
        description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
        sizes: null,
        colors: ["#1e293b", "#ffffff", "#3b82f6"]
    },
    {
        id: 18,
        name: "Ceramic Coffee Mug Set",
        category: "home",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.6,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
        badge: "new",
        description: "Set of 4 ceramic mugs with modern design and comfortable grip.",
        sizes: null,
        colors: ["#ffffff", "#1e293b", "#3b82f6"]
    },
    {
        id: 19,
        name: "Indoor Plant Pot Set",
        category: "home",
        price: 39.99,
        originalPrice: 54.99,
        rating: 4.4,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
        badge: null,
        description: "Set of 3 modern plant pots with drainage holes and bamboo trays.",
        sizes: ["Small", "Medium", "Large"],
        colors: ["#ffffff", "#1e293b", "#b45309"]
    },
    {
        id: 20,
        name: "Soft Microfiber Bedding Set",
        category: "home",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
        badge: "hot",
        description: "Luxurious microfiber bedding set with pillowcases and fitted sheet.",
        sizes: ["Twin", "Full", "Queen", "King"],
        colors: ["#ffffff", "#1e293b", "#b8c5d6", "#e2e8f0"]
    },
    {
        id: 21,
        name: "Scented Candle Collection",
        category: "home",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        reviews: 345,
        image: "https://images.unsplash.com/photo-1763888476700-aaf0881361da?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "sale",
        description: "Set of 3 scented candles with natural soy wax and essential oils.",
        sizes: null,
        colors: ["#fcd34d", "#ef4444", "#10b981"]
    },
    {
        id: 22,
        name: "Kitchen Knife Set Pro",
        category: "home",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop",
        badge: null,
        description: "Professional 6-piece knife set with wooden block and sharpening tool.",
        sizes: null,
        colors: ["#1e293b"]
    },
    {
        id: 23,
        name: "Throw Blanket Cozy",
        category: "home",
        price: 44.99,
        originalPrice: 59.99,
        rating: 4.5,
        reviews: 278,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
        badge: null,
        description: "Ultra-soft throw blanket perfect for couch or bed.",
        sizes: ["50\" x 60\"", "60\" x 80\""],
        colors: ["#1e293b", "#64748b", "#b8c5d6", "#b45309"]
    },
    {
        id: 24,
        name: "Wall Mounted Shelf Set",
        category: "home",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.3,
        reviews: 167,
        image: "https://plus.unsplash.com/premium_photo-1748106667459-2f154e4ef1b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: null,
        description: "Modern floating shelf set with invisible mounting system.",
        sizes: ["3-Piece", "5-Piece"],
        colors: ["#ffffff", "#1e293b", "#b45309"]
    },
    
    // Sports
    {
        id: 25,
        name: "Yoga Mat Premium",
        category: "sports",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.6,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
        badge: null,
        description: "Non-slip yoga mat with extra cushioning and carrying strap.",
        sizes: ["24\" x 68\"", "26\" x 72\""],
        colors: ["#3b82f6", "#10b981", "#ef4444", "#1e293b"]
    },
    {
        id: 26,
        name: "Adjustable Dumbbell Set",
        category: "sports",
        price: 199.99,
        originalPrice: 279.99,
        rating: 4.8,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
        badge: "hot",
        description: "Space-saving adjustable dumbbells from 5-52.5 lbs with quick-change system.",
        sizes: null,
        colors: ["#1e293b"]
    },
    {
        id: 27,
        name: "Fitness Tracker Band",
        category: "sports",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.4,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
        badge: "sale",
        description: "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
        sizes: ["S/M", "L/XL"],
        colors: ["#1e293b", "#3b82f6", "#ef4444", "#10b981"]
    },
    {
        id: 28,
        name: "Resistance Bands Set",
        category: "sports",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.5,
        reviews: 378,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
        badge: null,
        description: "Complete set of 5 resistance bands with different resistance levels.",
        sizes: null,
        colors: ["#3b82f6", "#10b981", "#ef4444", "#fcd34d", "#ef4444"]
    },
    {
        id: 29,
        name: "Cycling Helmet Pro",
        category: "sports",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.7,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1590093105704-fddd246ab64f?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: null,
        description: "Aerodynamic cycling helmet with ventilation and LED lights.",
        sizes: ["S", "M", "L"],
        colors: ["#1e293b", "#ef4444", "#3b82f6"]
    },
    {
        id: 30,
        name: "Swimming Goggles Pro",
        category: "sports",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.4,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop",
        badge: null,
        description: "Anti-fog swimming goggles with UV protection and comfortable seal.",
        sizes: null,
        colors: ["#1e293b", "#3b82f6", "#10b981"]
    },
    {
        id: 31,
        name: "Basketball Official Size",
        category: "sports",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.5,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1676315636766-7b129985c537?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: null,
        description: "Official size indoor/outdoor basketball with superior grip.",
        sizes: null,
        colors: ["#f97316", "#1e293b"]
    },
    {
        id: 32,
        name: "Tennis Racket Kit",
        category: "sports",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.6,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=400&fit=crop",
        badge: "new",
        description: "Professional tennis racket with grip, strings, and carrying case.",
        sizes: ["L2", "L3", "L4"],
        colors: ["#1e293b", "#3b82f6"]
    },
    
    // Beauty
    {
        id: 33,
        name: "Skincare Essentials Kit",
        category: "beauty",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        badge: "hot",
        description: "Complete skincare routine with cleanser, toner, serum, and moisturizer.",
        sizes: null,
        colors: ["#ffffff"]
    },
    {
        id: 34,
        name: "Premium Hair Dryer",
        category: "beauty",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.6,
        reviews: 312,
        image: "https://plus.unsplash.com/premium_photo-1677838848125-a322d41868f3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: null,
        description: "Ionic hair dryer with multiple heat settings and concentrator.",
        sizes: null,
        colors: ["#1e293b", "#fcd34d", "#ef4444"]
    },
    {
        id: 35,
        name: "Makeup Brush Set",
        category: "beauty",
        price: 44.99,
        originalPrice: 59.99,
        rating: 4.5,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1693588516818-a4cbe7b49ae2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "sale",
        description: "12-piece professional makeup brush set with synthetic bristles.",
        sizes: null,
        colors: ["#1e293b", "#b8c5d6", "#fcd34d"]
    },
    {
        id: 36,
        name: "Perfume Eau de Parfum",
        category: "beauty",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=400&h=400&fit=crop",
        badge: "new",
        description: "Luxury long-lasting perfume with notes of florals and musk.",
        sizes: ["50ml", "100ml"],
        colors: ["#fcd34d", "#ef4444", "#1e293b"]
    },
    {
        id: 37,
        name: "Electric Facial Cleanser",
        category: "beauty",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.4,
        reviews: 378,
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
        badge: null,
        description: "Sonic facial cleanser with multiple brush heads and timers.",
        sizes: null,
        colors: ["#ffffff", "#1e293b", "#fcd34d"]
    },
    {
        id: 38,
        name: "Nail Care Kit Complete",
        category: "beauty",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.3,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
        badge: null,
        description: "Professional nail care kit with tools for manicure and pedicure.",
        sizes: null,
        colors: ["#1e293b", "#fcd34d", "#ef4444"]
    },
    {
        id: 39,
        name: "Organic Face Mask Set",
        category: "beauty",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.6,
        reviews: 456,
        image: "https://m.media-amazon.com/images/I/81trrUYtksL._AC_UL320_.jpg",
        badge: "sale",
        description: "Set of 7 organic face masks for different skin concerns.",
        sizes: null,
        colors: ["#ffffff"]
    },
    {
        id: 40,
        name: "Hair Styling Clay",
        category: "beauty",
        price: 24.99,
        originalPrice: 32.99,
        rating: 4.4,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=400&fit=crop",
        badge: null,
        description: "Strong hold hair clay with natural ingredients and matte finish.",
        sizes: ["50g", "100g"],
        colors: ["#1e293b"]
    },
    
    // Toys & Games
    {
        id: 41,
        name: "Building Blocks Set 500pc",
        category: "toys",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.8,
        reviews: 678,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop",
        badge: "hot",
        description: "Creative building blocks set with 500 pieces in various colors.",
        sizes: null,
        colors: ["#ef4444", "#3b82f6", "#10b981", "#fcd34d"]
    },
    {
        id: 42,
        name: "Board Game Collection",
        category: "toys",
        price: 39.99,
        originalPrice: 54.99,
        rating: 4.6,
        reviews: 345,
        image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=400&fit=crop",
        badge: null,
        description: "Classic family board game for 2-6 players. Ages 8+.",
        sizes: null,
        colors: ["#1e293b"]
    },
    {
        id: 43,
        name: "Remote Control Car",
        category: "toys",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.5,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=400&fit=crop",
        badge: "sale",
        description: "High-speed RC car with 2.4GHz remote and stunt capabilities.",
        sizes: null,
        colors: ["#ef4444", "#3b82f6", "#1e293b"]
    },
    {
        id: 44,
        name: "Puzzle 1000 Pieces",
        category: "toys",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.4,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: null,
        description: "Beautiful 1000-piece puzzle with stunning landscape design.",
        sizes: null,
        colors: ["#3b82f6"]
    },
    {
        id: 45,
        name: "Action Figure Set",
        category: "toys",
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
        badge: "new",
        description: "Collectible action figure set with accessories. 6\" scale.",
        sizes: null,
        colors: ["#1e293b", "#3b82f6"]
    },
    {
        id: 46,
        name: "Educational Science Kit",
        category: "toys",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        reviews: 378,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop",
        badge: null,
        description: "Hands-on science experiments kit for young explorers. Ages 8+.",
        sizes: null,
        colors: ["#3b82f6", "#10b981"]
    },
    {
        id: 47,
        name: "Plush Teddy Bear Larges",
        category: "toys",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.8,
        reviews: 567,
        image: "https://m.media-amazon.com/images/I/81ubNih2WeL._AC_UL480_FMwebp_QL65_.jpg",
        badge: "hot",
        description: "Extra soft and huggable teddy bear. 18\" tall.",
        sizes: ["12\"", "18\"", "24\""],
        colors: ["#b45309", "#1e293b", "#fcd34d"]
    },
    {
        id: 48,
        name: "Art Drawing Set Pro",
        category: "toys",
        price: 44.99,
        originalPrice: 59.99,
        rating: 4.5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
        badge: null,
        description: "Professional drawing set with pencils, markers, and sketchbook.",
        sizes: null,
        colors: ["#1e293b"]
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCart();
    startDealTimer();
});

// Render Products
function renderProducts(productsToRender, append = false) {
    if (!append) {
        productsGrid.innerHTML = '';
    }
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-actions">
                    <button class="product-action-btn wishlist" onclick="addToWishlist(${product.id}, this)" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="product-action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Render Stars
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Filter Products
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.filter;
        if (category === 'all') {
            renderProducts(products);
        } else {
            const filteredProducts = products.filter(p => p.category === category);
            renderProducts(filteredProducts);
        }
    });
});

// Search Products
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showProductModal(productId);
    }
}

// Show Product Modal
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="product-rating">
                ${renderStars(product.rating)}
                <span>(${product.reviews} reviews)</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <p>${product.description}</p>
            
            ${product.sizes ? `
                <div class="modal-options">
                    <h4>Size</h4>
                    <div class="size-options">
                        ${product.sizes.map((size, index) => `<button class="size-option ${index === 0 ? 'active' : ''}" data-size="${size}">${size}</button>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${product.colors ? `
                <div class="modal-options">
                    <h4>Color</h4>
                    <div class="color-options">
                        ${product.colors.map((color, index) => `<button class="color-option ${index === 0 ? 'active' : ''}" data-color="${color}" style="background-color: ${color}"></button>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="modal-quantity">
                <h4>Quantity:</h4>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="changeModalQty(-1)">-</button>
                    <span class="qty-value" id="modalQty">1</span>
                    <button class="qty-btn" onclick="changeModalQty(1)">+</button>
                </div>
            </div>
            
            <div class="modal-buttons">
                <button class="btn btn-primary" onclick="addToCartWithQty(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn btn-outline" onclick="addToWishlist(${product.id})">
                    <i class="far fa-heart"></i> Wishlist
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    
    // Size and color selection
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Change Modal Quantity
let modalQuantity = 1;
function changeModalQty(change) {
    modalQuantity = Math.max(1, modalQuantity + change);
    document.getElementById('modalQty').textContent = modalQuantity;
}

// Add to Cart with Quantity
function addToCartWithQty(productId) {
    const product = products.find(p => p.id === productId);
    const selectedSize = document.querySelector('.size-option.active')?.dataset.size;
    const selectedColor = document.querySelector('.color-option.active')?.dataset.color;
    
    addToCart(productId, modalQuantity, selectedSize, selectedColor);
    modalQuantity = 1;
    productModal.classList.remove('active');
}

// Add to Cart
function addToCart(productId, quantity = 1, size = null, color = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.size === size && 
        item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            size: size,
            color: color
        });
    }
    
    saveCart();
    updateCart();
    showToast(`${product.name} added to cart!`);
}

// Add to Wishlist
function addToWishlist(productId, btn = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        showToast(`${product.name} added to wishlist!`);
        if (btn) {
            btn.classList.add('added');
            btn.querySelector('i').classList.remove('far');
            btn.querySelector('i').classList.add('fas');
        }
    } else {
        showToast(`${product.name} is already in wishlist!`);
    }
}

// Update Cart
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    ${item.size ? `<span style="font-size: 12px; color: #64748b;">Size: ${item.size}</span>` : ''}
                    ${item.color ? `<span style="font-size: 12px; color: #64748b;">Color: <span style="display: inline-block; width: 16px; height: 16px; background: ${item.color}; border-radius: 50%; vertical-align: middle;"></span></span>` : ''}
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1, '${item.size || ''}', '${item.color || ''}')">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1, '${item.size || ''}', '${item.color || ''}')">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size || ''}', '${item.color || ''}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

// Update Cart Item Quantity
function updateCartItemQty(productId, change, size, color) {
    const item = cart.find(i => i.id === productId && i.size === size && i.color === color);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        if (item.quantity <= 0) {
            removeFromCart(productId, size, color);
        } else {
            saveCart();
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId, size, color) {
    cart = cart.filter(item => !(item.id === productId && item.size === size && item.color === color));
    saveCart();
    updateCart();
    showToast('Item removed from cart');
}

// Clear Cart
clearCartBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCart();
        showToast('Cart cleared!');
    }
});

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cart Sidebar Toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Checkout Total: $${total.toFixed(2)}\n\nThank you for shopping with ShopMax!`);
    cart = [];
    saveCart();
    updateCart();
    closeCartSidebar();
});

// Product Modal Close
closeModal.addEventListener('click', () => {
    productModal.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
    productModal.classList.remove('active');
});

// Toast Notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Deal Timer
function startDealTimer() {
    // Set end date to 2 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        
        if (distance < 0) {
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Newsletter Form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showToast(`Thank you for subscribing! ${email}`);
    e.target.reset();
});

// Render Deal Products
const dealsGrid = document.getElementById('dealsGrid');
const dealProducts = products.filter(p => p.badge === 'sale' || p.badge === 'hot').slice(0, 6);

dealsGrid.innerHTML = dealProducts.map(product => `
    <div class="deal-card">
        <div class="deal-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.originalPrice ? `<span class="deal-discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
        </div>
        <div class="deal-info">
            <span class="product-category">${product.category}</span>
            <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
            <div class="product-rating">
                ${renderStars(product.rating)}
                <span>(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    </div>
`).join('');

// Load More Products
let productsLoaded = 8;
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    const moreProducts = products.slice(productsLoaded, productsLoaded + 8);
    if (moreProducts.length > 0) {
        renderProducts(moreProducts, true);
        productsLoaded += 8;
        if (productsLoaded >= products.length) {
            document.getElementById('loadMoreBtn').style.display = 'none';
        }
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#fff';
    nav.style.flexDirection = 'column';
    nav.style.padding = '20px';
    nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Category Click
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.dataset.category;
        filterBtns.forEach(btn => {
            if (btn.dataset.filter === category) {
                btn.click();
            }
        });
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});
