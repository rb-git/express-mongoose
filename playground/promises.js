const promiseDemo = new Promise ((resolve,reject) =>{
    setTimeout(()=>{
     //resolve('this is a success message');
     reject('this is a rejection');
    },2000)
})

promiseDemo.then((result)=>{
   console.log('Success',result);
}).catch((error)=>{
    console.log('Error',error);
})