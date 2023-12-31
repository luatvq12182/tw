const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        ref: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
