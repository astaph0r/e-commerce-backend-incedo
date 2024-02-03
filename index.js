require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
const cookieParser = require("cookie-parser");
const path = require("path");
const { env } = require("process");


const PORT = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, "build")));
server.use(cookieParser());
server.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false, // don't save session if unmodified
        saveUninitialized: false, // don't create session until something stored
    })
);
// server.use(passport.authenticate('session'));
server.use(
    cors({
        exposedHeaders: ["X-Total-Count"],
    })
);
server.use(express.json()); // to parse req.body

// server.use('/products', isAuth(), productsRouter.router);
// // we can also use JWT token for client-only auth
// server.use('/categories', isAuth(), categoriesRouter.router);
// server.use('/brands', isAuth(), brandsRouter.router);
// server.use('/users', isAuth(), usersRouter.router);
// server.use('/auth', authRouter.router);
// server.use('/cart', isAuth(), cartRouter.router);
// server.use('/orders', isAuth(), ordersRouter.router);

// this line we add to make react router work in case of other routes doesnt match
// server.get('*', (req, res) =>
//   res.sendFile(path.resolve('build', 'index.html'))
// );

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB_URL);
//   console.log('database connected');
// }


//added just to check if its working or not
server.get("/hello", (req, res) => {
    try {
        res.status(200).json({ hello: "hi" });
    } catch (err) {
        res.status(400).json(err);
    }
});

server.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}/`);
});
