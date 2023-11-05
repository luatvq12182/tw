const express = require("express");
const passport = require("passport");
const userRouter = require("./app/routes/user.route");
const accountRouter = require("./app/routes/account.route");
require("dotenv").config();
require("./config/database");
require("./config/passport");

const app = express();

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/accounts", accountRouter);
app.get("/", (_req, res) => {
    res.sendFile("index.html");
});

app.use(
    "/api",
    passport.authenticate("jwt", { session: false }),
    (_req, _res, next) => {
        next();
    }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
