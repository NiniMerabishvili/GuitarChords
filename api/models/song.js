const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lyrics: { type: String, required: true },
    status: { type: Number, required: true, default: 1 }
}, {
    collection: 'songs',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;