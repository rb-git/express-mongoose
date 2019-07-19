const mongoose = require('mongoose')
const validator = require('validator')

//define model
const User = mongoose.model('User', { 
    name: {
           type : String,
           required: true,
           trim : true,
           lowercase : true
         },
    age : {
           type : Number,
           default : 20,
           max : 60,
           required : true
        },
    email : {
           type :  String,
           required : true,
           trim : true,
           lowercase : true,
           validate(value){
               if(!validator.isEmail(value)){
                   throw new Error("this is not a valid email address");
               }
           }
    },
    password : {
        type: String,
        required : true,
        minlength : 7,
        trim : true
    }
    });

    module.exports = User