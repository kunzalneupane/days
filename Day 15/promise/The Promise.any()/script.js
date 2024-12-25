const promise1 = promise.reject('Error');
const promise2 = promise.resolve('sucess');
const promise3 = promise.reject('Error');
const promise4 = promise.resolve('sucess');

promise.any([promise1 , promise2 , promise3 , promise4])
.then (result =>{
    console.log(result);

})
.catch (error =>{
    console.log(error);
 });



