const mongoose = require('mongoose')
const validator = require('validator')

//define model
const Task = mongoose.model('Task', { 
    description : {
           type : String,
           required: true,
           trim : true,
           lowercase : true
         },
    completed : {
           type : Boolean,
           default: false
        }
    });

    module.exports = Task