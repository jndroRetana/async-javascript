const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do something async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const dosomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before");
dosomething();
console.log("After");
