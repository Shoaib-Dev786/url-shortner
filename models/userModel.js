const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        min: [3, "Invalid Username!"]
    },
    password: {
        type: String,
        min: [8, "Password must be 8 characters long."]
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;