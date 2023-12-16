const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'hahaha', maxLength: 255 },
    description: { type: String, default: 'No description' },
    image: { type: String, default: 'https://www.giaoxugiaohovietnam.com/ThaiBinh/ThuChinh/ThuChinh-07112014%20(24).JPG' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
