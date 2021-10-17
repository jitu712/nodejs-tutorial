const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'text', 'demo.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const abs = path.resolve(__dirname, 'content', 'text', 'demo.txt');

console.log(abs);