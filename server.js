import jsonServer from "json-server";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let dataToDoList = [
  { id: 0, done: true, body: "ToDo" },
  { id: 1, done: false, body: "ToDo" },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "./db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/api/toDoList", (req, res) => {
  res.jsonp(dataToDoList);
});

server.get("/api/toDoList/:id/done", (req, res) => {
  let element;
  if (req.params.id !== undefined) {
    const index = dataToDoList.findIndex((el) => {
      return el.id === Number(req.params.id);
    });
    dataToDoList[index].done = true;
    element = dataToDoList[index];
  }
  res.jsonp(element);
});

server.get("/api/toDoList/:id/unDone", (req, res) => {
  let element;
  console.log("запрос", req.params);
  if (req.params.id !== undefined) {
    const index = dataToDoList.findIndex((el) => {
      return el.id === Number(req.params.id);
    });
    dataToDoList[index].done = false;
    element = dataToDoList[index];
  }

  res.jsonp(element);
});

server.use(jsonServer.bodyParser);
server.post("/api/auth", (req, res) => {
  if (req.body.login === "admin" && req.body.password === "admin") {
    res.jsonp({ name: "admin" });
  } else {
    res.sendStatus(401);
  }
});

server.post("/api/toDoList/:id/delete", (req, res) => {
  let element;
  if (req.params.id !== undefined) {
    const index = dataToDoList.findIndex((el) => {
      return el.id === Number(req.params.id);
    });
    element = dataToDoList.splice(index, 1);
  }
  res.jsonp(element[0]);
});

server.use(router);
server.listen(3000, () => {});
