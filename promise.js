let  fetchDataFromDatabase = new Promise((resolve,reject) =>{
    setTimeout(() => {
        const data = true
        if(data){
            resolve("Data fetched successfully!")

        }else{
            reject("Data not found!")
        }
        
    }, 3000);
})
fetchDataFromDatabase
.then(message => {
    console.log(message);
})
.catch(message=> {
    console.log(error);
})
