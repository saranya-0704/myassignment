let conditionalPromise = new Promise ((resolve,reject) => {

    let randomnumber = Math.random
    console.log (randomnumber)
    if(randomnumber>0.5){
        resolve("Resolved successfully")

    }else{
            reject("Rejected")
         }
})

conditionalPromise 
.then(message=>{
    console.log(message)
})
.catch(error=>{
    console.log(error)
});
