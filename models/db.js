const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kumawatdevesn99:kumawatdevesn99@cluster0-tpp9z.mongodb.net/Users?retryWrites=true&w=majority', {useNewUrlParser:true}, 
(err) => {
    if(!err){
        // console.log('connected');
    }else{
        console.log('not connected');
    }
});