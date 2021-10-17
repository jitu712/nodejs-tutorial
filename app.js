const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('welcome to the homepage');
    }
    res.end(`
    <h1>OOPS</h1>
    <a href="/">Home</a>
    `);
})

server.listen(5000);