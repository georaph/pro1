var promise1 = new Promise(function(resolve, reject) {
  resolve('Success!');
});

var promise2 = new Promise(function(resolve, reject) {
  resolve('Success!2');
});

var promise3 = new Promise(function(resolve, reject) {
  resolve('Success!3');
});

promise3.then(function(value) {
  console.log(value);
  // expected output: "Success!"
   promise2.then(function(value) {
  console.log(value);
  // expected output: "Success!"
});

});

