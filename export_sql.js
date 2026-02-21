const fs = require('fs');
const path = require('path');

async function generateSQL() {
    const appFile = path.join(__dirname, 'Shop max platform/Public/app_utf8.js');
    const content = fs.readFileSync(appFile, 'utf8');

    // Extract the products array text
    const startMatch = content.match(/const\s+products\s*=\s*\[/);
    if (!startMatch) {
        console.error('Could not find products array');
        return;
    }

    const startIdx = startMatch.index + startMatch[0].length - 1;
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

    let products;
    try {
        products = eval(productsJsonText);
    } catch (e) {
        console.error('Error parsing products with eval:', e);
        return;
    }

    console.log(`Extracted ${products.length} products.`);

    const categories = {
        'electronics': 1,
        'beauty': 2,
        'fashion': 3,
        'home': 4,
        'sports': 5,
        'toys': 6
    };

    let sql = `-- SQL Insert script for all ${products.length} products (Singular Table: product)\n`;
    sql += `-- Corrected JSON escaping for compatibility\n`;
    sql += `USE shop_v2;\n\n`;
    sql += `INSERT INTO product\n(name, description, price, original_price, rating, reviews, colors, sizes, badge, category_id, image)\nVALUES\n`;

    const values = products.map((p, index) => {
        const name = p.name.replace(/'/g, "''").trim();
        const desc = (p.description || '').replace(/'/g, "''").trim();
        const price = parseFloat(p.price) || 0;
        const origPrice = parseFloat(p.originalPrice || p.originalprice) || 'NULL';
        let rating = typeof p.rating === 'object' ? (p.rating.stars || 0) : (parseFloat(p.rating) || 0);
        // Fix for #4025: Normalize ratings (e.g., 49 -> 4.9) and cap at 9.9 for DECIMAL(2,1)
        if (rating > 10) rating = rating / 10;
        if (rating > 9.9) rating = 9.9;

        const reviews = typeof p.rating === 'object' ? (p.rating.count || 0) : (parseInt(p.reviews) || 0);

        // Proper JSON escaping for SQL strings
        // 1. Stringify the object
        // 2. Escape backslashes for SQL (\\ becomes \\\\)
        // 3. Escape single quotes for SQL (' becomes '')
        const colors = JSON.stringify(p.colors || p.color || p.coolors || []).replace(/\\/g, '\\\\').replace(/'/g, "''");
        const sizes = JSON.stringify(p.sizes || []).replace(/\\/g, '\\\\').replace(/'/g, "''");

        const badge = p.badge ? `'${p.badge.trim().replace(/'/g, "''")}'` : 'NULL';
        const catSlug = (p.category || 'electronics').trim().toLowerCase();
        const catId = categories[catSlug] || 1;
        const img = p.image;

        return `('${name}',\n '${desc}',\n ${price}, ${origPrice}, ${rating}, ${reviews}, '${colors}', '${sizes}', ${badge}, ${catId},\n '${img}')`;
    });

    sql += values.join(',\n\n') + ';\n';

    const outputPath = path.join(__dirname, 'Shop max platform/Public/sql/all_products_singular.sql');
    fs.writeFileSync(outputPath, sql);
    console.log(`Successfully generated SQL file at: ${outputPath}`);
}

generateSQL();
