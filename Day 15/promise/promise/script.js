let promise = new Promise((resolve, reject) => {
    console.log("Example of promise");
    resolve("Promise has been resolved!");  
});

promise.then(result => {
    console.log(result);  
});
