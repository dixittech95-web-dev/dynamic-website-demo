const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    labName: { type: String, required: true },
    shortDesc: { type: String },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    image: {
        url: String,
    },
    images: {
        url: String,
    },
    pdfpath: {
        url: String,
    },
    path: {
        url: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);