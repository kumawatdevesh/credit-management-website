const Users = require('../models/model');

exports.homePage = (req, res, next) => {
    res.render('home', {

    });
};

exports.getUsers = (req, res, next) => {
    
    Users.find().then(result => {
        res.render('users', {
            users: result
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postUsers = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const points = req.body.points;
    var user = new Users({
        name: name,
        email: email,
        points: points
    });
    user.save().then(result => {
        console.log('user created');
        res.redirect('/');
    });
};

exports.getDetails = (req, res, next) => {
    const id = req.params.id;
    Users.findOne({_id: id}).then(result => {
        res.render('details', {
            user: result
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.updateData = (req, res, next) => {
    const name = req.body.pick;
    const points = req.body.points;
    const id = req.params.id;
    const userPoints = 0;
    
    let valid = Users.findByIdAndUpdate({_id: id}, {new: true}, function(err, user){
        if(err){
            console.log(err);
        }else{
         if(points > user.points){
            return false;
         }else{
            user.points = +user.points - +points;
            user.save()
             .then(res => {

            }).catch(err => {
                console.log(err);
            });
        }
    }
    return true;
});
    Users.findOneAndUpdate({name: name},{new: true}, function(err, user){
        if(err){
            console.log('error');
        }else{
           if(!valid){
                console.log('no');
           }else{
            user.points = +user.points + +points;
            user.save()
            .then(res => {
 
            }).catch(err => {
                console.log(err);
            });
        }
    }
});

res.redirect('/users');
};