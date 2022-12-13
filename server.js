import jsonServer from "json-server";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let dataToDoList = [
  { id: 0, done: true, body: "ToDo" },
  { id: 1, done: false, body: "ToDo" }
]

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "./db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/api/toDoList", (req, res) => {
  console.log('куери параметр', req.query)
 res.jsonp(dataToDoList)
  console.log('ответ', res.jsonp(dataToDoList) )
})

server.use(jsonServer.bodyParser);
server.post("/api/auth", (req, res) => {
  if (req.body.login === "admin" && req.body.password === "admin") {
    res.jsonp({"name":"admin"});
  } else {
    res.sendStatus(401);
  }
});


server.use(router);
server.listen(3000, () => {
});
