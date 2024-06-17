const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    lyrics: { type: String, required: true },
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