const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`Data Received: ${name} ${id}`);
});

customEmitter.on("response", () => {
    console.log("Another Data Received");
});

customEmitter.emit("response", "Gags", 21);
