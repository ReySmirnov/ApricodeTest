import jsonServer from "json-server";
import { join, dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "./db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post("/api/auth", (req, res) => {
  res.jsonp(req.body)
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
