//Asynchronous - call back function

const { log } = require('console');
const { readFile, writeFile } = require('fs');

// Without utf-8 well get a string buffer
log("Starting");
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/fourth.txt", `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("Done with this task.");
        });
    })
});
log("Starting next task.");