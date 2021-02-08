const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
const s3 = new AWS.S3();
const multer = require("multer");
const multerS3 = require("multer-s3");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const soundRouter = express.Router();

const soundUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "bibim",

        key: function (req, file, callback) {
            const newFileName = `${Date.now()}_${file.originalname}`;
            const fullPath = `Sound/${newFileName}`;
            callback(null, fullPath);
        },
        acl: "public-read-write",
    }),
});

soundRouter.post("/upload", soundUpload.single("sound"), async (req, res) => {
    let sound = req.sound;
    res.json(sound.location);
});

module.exports = soundRouter;
