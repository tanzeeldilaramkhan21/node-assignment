import { createServer } from 'node:http'

const PORT = 3000

const server = createServer((req, res) => {
    // picking up stuff from req object
    // console.log({ method: req.method, url: req.url })

    // destructure stuff from req
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);

    // Set response header to JSON
    res.setHeader('Content-Type', 'application/json');
    // get request
    if (method === 'GET' && parsedUrl.pathname === '/api/items') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'GET request - Fetching all items' }));

         // POST Request
    } else if (method === 'POST' && parsedUrl.pathname === '/api/items') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newItem = JSON.parse(body);
            res.statusCode = 201; //created
            res.end(JSON.stringify({ message: `POST request - Adding new item`, data: newItem }));
        });
