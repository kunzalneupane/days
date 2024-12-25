const promise1 = Promise.resolve(3); 
const promise2 = Promise.reject('Error occurred'); 
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, ));


Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  });