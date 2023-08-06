const os = require('os');

const OSDetails = {
    name: os.type(),
    release:os.release(),
    upTime:os.uptime(),
    totmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(OSDetails);