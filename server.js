require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json()); // body-parser

const http = require("http");
const server = http.createServer(app);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const userRouter = require("./router/userRouter");

app.use("/api/user", userRouter);

server.listen(process.env.PORT || 8000, () => {
    console.log(`Server runs at ${process.env.PORT || 8000}`);
});
