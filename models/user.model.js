let mongoose = require("mongoose").connection;
let Schema = require("mongoose").Schema;

let userSchema = new Schema(
    {
        name : {
            type: String,
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    }
)

const userModel = mongoose.model("users", userSchema, "users");
module.exports = userModel;