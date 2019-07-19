//CRUD in MongoDB

/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
 */

const { MongoClient, ObjectID } = require('mongodb');

/* const custom_id = new ObjectID();
console.log('custom_id = ' + custom_id.toHexString());
console.log('length = ' + custom_id.id.length);
console.log('generationTime = ' + custom_id.generationTime);
console.log('getTimestamp = ' + custom_id.getTimestamp()); */

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

 MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error,client)=>{
    //error callback
    if(error){
    return console.log('unable to connect to DB');
    }
    
    //success callback
    const db = client.db(databaseName);

    db.collection('users').deleteOne(
        { age : 222},
        ).then((result)=>{
     console.log(result);
    }).catch((error)=>{
     console.log(error);
    })

    /*
    db.collection('tasks').updateMany(
        { completed : true},
        { $set : { completed : false } 
    }).then((result)=>{
     console.log(result);
    }).catch((error)=>{
     console.log(error);
    })

     db.collection('users').updateOne(
        { _id : new ObjectID("5d1c852172fc170a00a897af")},
        { $inc : { age : 67 } 
    }).then((result)=>{
     console.log(result);
    }).catch((error)=>{
     console.log(error);
    }) */

    /*
    db.collection('tasks').findOne({_id : new ObjectID("5d1c8644e56207118cefb9e2")},(error,task)=>{
      if(error){
          console.log('could not fetch task');
      }
      console.log(task);
    })

    db.collection('tasks').find({completed : true}).toArray((error,documents)=>{
        console.log(documents);
    })
    
    
    
    db.collection('users').insertOne({
        //_id : custom_id,
        name : 'auto_revert',
        age : 22
    },(error, result)=>{
        if(error){
            console.log('unable to insert user');
        }
       console.log(result.ops);
    }) 

     db.collection('users').insertMany([
        {
            name : 'Andrew',
             age : 42 
        },
        {
        name : 'Ganesh',
         age : 66 
    },
    {
        name : 'Amrit',
        age  : 22
    }],(error,result)=>{
        if(error){
        console.log('failed to insert users');
        }
        console.log(result.ops);
    }) 

    db.collection('tasks').insertMany([
        {
            description : 'configuration',
             completed : true 
        },
        {
            description : 'execution',
             completed : true 
        },
        {
            description : 'analytics',
             completed : false 
        }
    ],(error,result)=>{
        if(error){
        console.log('failed to insert users');
        }
        console.log(result.ops);
    }) 
    
    */

})
