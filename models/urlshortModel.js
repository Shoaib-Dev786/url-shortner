const mongoose = require("mongoose");
const nanoId = require("nanoid");

const urlshortSchema = new mongoose.Schema({
    full: {
        type: String,
    },
    short: {
        type: String,
        default: nanoId.nanoid
    },
    clicks: {
        type: Number,
        default: 0
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

const UrlShrink = mongoose.model("UrlShrink", urlshortSchema);

module.exports = UrlShrink;