const express = require("express");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    res.json("bibim server now live");
});

module.exports = userRouter;
