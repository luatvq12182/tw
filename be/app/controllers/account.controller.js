const AccountService = require("../services/account.service");

const createAccount = async (req, res) => {
    try {
        const account = await AccountService.createAccount(req.body);
        res.status(201).json(account);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAccounts = async (_req, res) => {
    try {
        const accounts = await AccountService.getAccounts();
        res.status(201).json(accounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createAccount,
    getAccounts,
};
