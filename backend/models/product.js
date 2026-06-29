const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    labName: { type: String, required: true },
    productName: { type: String, required: true },
    shortDesc: { type: String, required: true },
    desc: { type: String, required: true },
    images: [{
        url: String,
        caption: String,
    }], // Array for multiple images
    category: { type: String, required: true },
    featured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', productSchema);