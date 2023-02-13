import jsonServer from 'json-server';
import * as dotenv from 'dotenv';
dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running on port ${process.env.PORT}`);
});
