var router = require('express').Router();
var User = require('../models/user');
router
    .route('/')
    .get(function(req, res, next){
        console.log('users is trying');
        User.find({})
            .exec(function(err, users){
                if (err) {
                    next(err);
                }

                res.json(users);
            });
    });

module.exports = router;
