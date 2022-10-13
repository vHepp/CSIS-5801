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
    }
)

const User = mongoose.model("User", userSchema)

exports.User = User