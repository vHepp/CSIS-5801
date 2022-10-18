// UserModel.js
// Ethan Gill, 10/18/2022

const mongoose = require(mongoose);

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
            data: Buffer,
            contentType: String
        }
    }, {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

exports.User = User;