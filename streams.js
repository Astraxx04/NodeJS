const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big_file.txt");

// const stream = createReadStream("./content/big_file.txt", { highWaterMark: 80000 });

const stream = createReadStream("../content/big_file.txt", { encoding: "utf8" });

stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (err) => {
    console.log(err);
});



// default 64kb size

// const { writeFileSync } = require("fs");

// for (let i =0; i<100000; i++) {
//     writeFileSync("./content/big_file.txt", ` Writing file: ${i}\n`, {flag: "a"})
// }