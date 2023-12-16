const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'hahaha', maxLength: 255 },
    description: { type: String, default: 'No description' },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, default: 'xWh0g4rKGjI?si=Lq-9f6k1KRc_7D1' },
    level: { type: String, default: 'No level' },
    image: { type: String, default: 'https://www.giaoxugiaohovietnam.com/ThaiBinh/ThuChinh/ThuChinh-07112014%20(24).JPG' },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
