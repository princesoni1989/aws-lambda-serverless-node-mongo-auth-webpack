import jwt from 'jsonwebtoken';
import User from "./user.model";

export function login(req, res, next) {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) return res.status(422).json('invalid credentials');
            let token = jwt.sign(user.toJSON(), 'reactstartapplication', {
                expiresIn: 1440, // expires in 24 hours
            });
            res.status(200).json({
                success: true,
                token: token,
            });
        })
        .catch(err => res.status(422).json(err))
}

export function signUp(req, res, next) {
    let newUser = new User(req.body);
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(422).json(err))
}

export function getUser(req, res, next) {
    User.findById(req.decoded && req.decoded._id)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send(err))
}

export function listUsers(req, res, next) {
    User.find({}, '-password')
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send(err))
}
