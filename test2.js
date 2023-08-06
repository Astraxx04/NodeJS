console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
setTimeout(() => {
    setInterval(() => {
        console.log("Hello world");
    }, 1000);
}, 1000);