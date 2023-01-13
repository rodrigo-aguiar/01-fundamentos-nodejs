import http from 'node:http';

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/users') {
    return response.end('Listagem de usuários');
  }

  if (method === 'POST' && url === '/users') {
    return response.end('Criação de usuários');
  }

  return response.end('Hello Ignite');
});

server.listen(3333);