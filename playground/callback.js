const callBackMtd = (callback) =>{
    setTimeout(()=>{
        //error
        //callback('this is my error', undefined);
        //succcess
        callback(undefined,[1,4,7]);
    },2000)
}

callBackMtd((error,result) => {
   if((error)=>{
      return console.log(error);
   })
   console.log(result);
})