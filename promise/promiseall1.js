var promise1 = Promise.resolve(30);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 10000, 'foo');
});

Promise.all([promise2]).then(function(values) {
  console.log(values);
  Promise.all([promise1]).then(function(values) {
  console.log(values);
  Promise.all([promise3]).then(function(values) {
  console.log(values);
});
});	
});
// expected output: Array [3, 42, "foo"]

