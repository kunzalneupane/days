function getData(dataId){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
        console.log("data", dataId);
        resolve("sucess");
        
     }, 3000);
      });
}

 async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);

 }