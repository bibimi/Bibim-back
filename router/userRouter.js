const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const userRouter = express.Router();

userRouter.get("/:email", async (req, res) => {
    const email = req.params.email;
    const response = { success: false, message: "" };

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (user) {
            response.user = user;
            response.success = true;
        } else {
            response.message = "일치하는 유저가 없습니다";
        }
        res.json(response);
    } catch (err) {
        console.log(err);
        response.message = "서버 오류입니다. 잠시 후 다시 시도해주세요";
        res.json(response);
    }
});

userRouter.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const nickname = req.body.nickname;
    const isArtist = false || req.body.isArtist;
    const introduce = "" || req.body.introduce;
    const response = { success: false, message: "" };

    try {
        await prisma.user.create({
            data: {
                email,
                password,
                name,
                nickname,
                isArtist,
                introduce,
            },
        });
        response.success = true;
        res.json(response);
    } catch (err) {
        console.log(err);
        response.message = "서버 오류입니다. 잠시 후 다시 시도해주세요";
        res.json(response);
    }
});

module.exports = userRouter;
