const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    try {
        const { q } = req.query;
        if (q && q.trim()) {
            const searchRegex = new RegExp(q.trim(), 'i');
            const products = await Product.find({
                $or: [
                    { productName: searchRegex },
                    { labName: searchRegex },
                    { category: searchRegex }
                ]
            });
            return res.json(products);
        }

        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchProducts = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q || !q.trim()) {
            return res.status(400).json({ error: 'Search query missing.' });
        }

        const searchRegex = new RegExp(q.trim(), 'i');
        const products = await Product.find({
            $or: [
                { productName: searchRegex },
                { labName: searchRegex },
                { category: searchRegex }
            ]
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFeatured = async (req, res) => {
    try {
        const products = await Product.find({ featured: true });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};