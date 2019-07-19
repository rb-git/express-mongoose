const mongoose = require('mongoose')

const connectStr = "mongodb://127.0.0.1:27017/task-manager-api";
mongoose.connect(connectStr, {
    useNewUrlParser : true, 
    useCreateIndex : true
})

/* //define model
const User = mongoose.model('Users', { 
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
}
});

//new obj creation
const newUser = new User({
    name : "     CAPSNAME",
    email : "abc@123.com"
})

//DB save
newUser.save().then(()=>{
   console.log(newUser);
}).catch((error)=>{
   console.log(error)
})

 */