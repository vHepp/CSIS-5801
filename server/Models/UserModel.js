// UserModel.js
// Ethan Gill, 10/18/2022

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        displayName: {
            type: String,
            required: [true, "Name is required"],
        },
        profileImage: {
            type: String,
            contentType: String
        },
        imageID: {
            type: String,
            contentType: String
        }
    }, {
    timestamps: true,
    collection: "users"
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;