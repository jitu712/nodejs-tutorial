const os = require('os');

// return current user info
console.log(os.userInfo());

// returns uptime of the system
console.log(os.uptime() / 60 / 60);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);