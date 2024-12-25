const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 150, 'Error'));

Promise.race([promise1, promise2, promise3])
  .then(result => {
    console.log(result);  // 'First'
  })
  .catch(error => {
    console.log(error);  // 'Error' if the first promise rejects
  });
