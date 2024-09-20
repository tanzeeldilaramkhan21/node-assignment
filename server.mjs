//create server
import { createServer } from 'node:http';

//  hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// sending requests and getting response
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

//creating different routs using '/', '/about', '/contact','404 response'
  if (req.url === '/') {
    res.end('Welcome to the Home Page');
  } else if (req.url === '/about') {
    res.end('This is the About Page');
  } else if (req.url === '/contact') {
    res.end('Contact us at contact@example.com');
  }
   // if rout is not founded response a 404 page
  else {
    res.statusCode = 404; 
    res.end('404 Not Found');
  }
});

//display the following on screen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});