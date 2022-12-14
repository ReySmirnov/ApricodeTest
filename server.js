import jsonServer from "json-server";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let dataToDoList = [
  { id: 0, done: true, body: "сделать авторизацию" },
  { id: 1, done: false, body: "сделать список задач" },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "./db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/api/toDoList", (req, res) => {
  if (req.query.doneStatus === "done") {
    return res.jsonp(dataToDoList.filter((el) => el.done));
  }
  if (req.query.doneStatus === "undone") {
    return res.jsonp(dataToDoList.filter((el) => !el.done));
  }
  res.jsonp(dataToDoList);
});

server.get("/api/toDoList/:id/done", (req, res) => {
  let element;

  if (!isNaN(Number(req.params.id))) {
    const index = dataToDoList.findIndex((el) => {
      return el.id === Number(req.params.id);
    });
    dataToDoList[index].done = true;
    element = dataToDoList[index];
    return res.jsonp(element);
  }

  res.sendStatus(400);
});

server.get("/api/toDoList/:id/unDone", (req, res) => {
  let element;

  if (!isNaN(Number(req.params.id))) {
    const index = dataToDoList.findIndex((el) => {
      return el.id === Number(req.params.id);
    });
    dataToDoList[index].done = false;
    element = dataToDoList[index];
    return res.jsonp(element);
  }

  res.sendStatus(400);
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
  let arrWithElement;

  if (!isNaN(Number(req.params.id))) {
    const index = dataToDoList.findIndex((el) => {
      return el.id === Number(req.params.id);
    });
    if (index >= 0) {
      arrWithElement = dataToDoList.splice(index, 1);
      return res.jsonp(arrWithElement[0]);
    }
  }
  res.sendStatus(400);
});

server.post("/api/toDoList", (req, res) => {
  let element;
  let newId;
  if (
    req.body.inputToDo &&
    typeof req.body.inputToDo === "string" &&
    req.body.inputToDo.trim()
  ) {
    newId = dataToDoList.reduce((acc, el) => {
      return acc === el.id ? ++acc : acc;
    }, 0);
    element = { id: newId, done: false, body: req.body.inputToDo.trim() };
    dataToDoList.push(element);
    return res.jsonp(element);
  }
  res.sendStatus(400);
});

server.use(router);
server.listen(3000, () => {});
