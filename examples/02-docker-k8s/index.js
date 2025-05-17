const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3000;

console.log('Kubernetes Demo App Starting...');

const handler = (req, res) => {
    console.log('Received request from', req.socket.remoteAddress);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head><title>Kubernetes In Action</title></head>
            <body>
                <h1>Hello from ${os.hostname()}</h1>
                <span>Mohamed Abdelazim's Notes</span>
            </body>
        </html>
    `);
}

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});