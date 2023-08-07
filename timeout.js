console.log("Starting");

setTimeout(() => {
    console.log("Inside the timeout");
}, 0);

console.log("Running1");
console.log("Running2");
for(let i = 0; i < 100; i++) {
    console.log("i = " + i);
}