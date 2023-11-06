const crypto = require("crypto");
const { format } = require("date-fns");
const Account = require("../models/account.model");
const { AppConfig } = require("../../config/appConfig");

const createAccount = (payload) => {
    const newAccount = new Account({
        ...payload,
        password: crypto
            .publicEncrypt(
                AppConfig.PublicKey,
                Buffer.from(payload.password, "utf-8")
            )
            .toString("base64"),
    });
    return newAccount.save();
};

const getAccounts = async () => {
    // return Account.find({});

    const accounts = await Account.find({});

    return accounts.map((e) => {
        const cvObj = e.toObject();

        return {
            ...cvObj,
            password: readPassword(cvObj.password),
            time: format(new Date(cvObj.createdAt), "dd-MM-yyyy hh:mm:ss"),
        };
    });
};

const readPassword = (pass) => {
    const encryptedBuffer = Buffer.from(pass, "base64");

    const decryptedData = crypto.privateDecrypt(
        AppConfig.PrivateKey,
        encryptedBuffer
    );

    return decryptedData.toString("utf-8");
};

module.exports = {
    createAccount,
    getAccounts,
    readPassword,
};
