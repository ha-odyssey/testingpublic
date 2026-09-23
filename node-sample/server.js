const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const routes = {
  '/': () => ({ message: 'Welcome to the sample Node.js HTTP server!' }),
  '/health': () => ({ status: 'ok', uptime: process.uptime() }),
  '/time': () => ({ now: new Date().toISOString() }),
};

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  const handler = routes[pathname];

  res.setHeader('Content-Type', 'application/json');

  if (!handler) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  res.statusCode = 200;
  res.end(JSON.stringify(handler()));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
