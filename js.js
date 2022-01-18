const reza = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("reza");
    reject("something went wrong");
  }, 1000);
});

promise.then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
}).finally(() => {
  console.log("clean up")
})
