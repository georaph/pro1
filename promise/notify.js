function notifyCompletion1() {
	console.log("1 Async operation completed.")
	var promise = new Promise((resolve, reject)=>{
    	resolve()
	})
	return promise;
}

function notifyCompletion2() {
	console.log("2 Async operation completed.")
	var promise = new Promise((resolve, reject)=>{
    	resolve()
	})
	return promise;
}
function asyncOperation1() {
	var promise = new Promise((resolve, reject)=>{
    	setTimeout(()=>{
        	resolve()
    	}, 3000)
	})
	return promise;
}

function asyncOperation2() {
	var promise = new Promise((resolve,reject)=>{
    	setTimeout(()=>{
        	resolve()
    	}, 3000)
	})
	return promise;
}

asyncOperation1().then(notifyCompletion1)
             	.then(asyncOperation2)
             	.then(notifyCompletion2)



