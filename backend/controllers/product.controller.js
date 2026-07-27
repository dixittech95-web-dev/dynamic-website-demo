const Product = require('../models/product');

const buildFilter = ({ q, category }) => {
    const filter = {};
    const searchTerm = q?.trim();
    const categoryTerm = category?.trim();

    if (searchTerm) {
        const searchRegex = new RegExp(searchTerm, 'i');
        filter.$or = [
            { labName: searchRegex },
            { category: searchRegex },
            { shortDesc: searchRegex },
        ];
    }

    if (categoryTerm) {
        filter.category = new RegExp(categoryTerm, 'i');
    }

    return filter;
};

exports.getAllProducts = async (req, res) => {
    try {
        const filter = buildFilter(req.query);
        const products = await Product.find(filter).sort({ labName: 1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchProducts = async (req, res) => {
    try {
        const filter = buildFilter(req.query);
        const products = await Product.find(filter).sort({ labName: 1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFeatured = async (req, res) => {
    try {
        const featuredProducts = await Product.find({ featured: true }).sort({ labName: 1 }).limit(3);
        if (featuredProducts.length) {
            return res.json(featuredProducts);
        }

        const fallbackProducts = await Product.find({}).sort({ labName: 1 }).limit(3);
        res.json(fallbackProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};