const { User } = require('../models/user.models');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();


module.exports.findUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(perfume => response.json(perfume))
        .catch(err => response.json(err))
}

module.exports.getAll = (request, response) => {
    User.find({})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}


module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.First_SECRET_KEY)
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user, token: userToken });
        })
        .catch(err => res.status(400).json(err));
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    .catch(err => res.status(400).json(err));
    if (user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.FIRST_SECRET_KEY);
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!", user: user, token: userToken })

}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({msg: "User Logged Out"});
    res.sendStatus(200);
}

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.First_SECRET_KEY, (err, payload) => {
      if (err) { 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
  }
  