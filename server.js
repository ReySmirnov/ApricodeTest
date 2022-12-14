import jsonServer from "json-server";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let dataToDoList = [
  { id: 0, done: true, body: "сделать авторизацию" },
  { id: 1, done: false, body: "сделать список задач" },
];

const getToDoIndexById = (id) => dataToDoList.findIndex((el) => el.id === id);

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

const checkValidParamIdMiddleware = (req, res, next) => {
  if (
    isNaN(Number(req.params.id)) ||
    dataToDoList.every((el) => {
      return el.id !== Number(req.params.id);
    })
  ) {
    res.sendStatus(400);
    return;
  }

  next();
};

server.get(
  "/api/toDoList/:id/done",
  checkValidParamIdMiddleware,
  (req, res) => {
    const index = getToDoIndexById(Number(req.params.id));
    dataToDoList[index].done = true;
    const element = dataToDoList[index];
    return res.jsonp(element);
  }
);

server.get(
  "/api/toDoList/:id/undone",
  checkValidParamIdMiddleware,
  (req, res) => {
    const index = getToDoIndexById(Number(req.params.id));
    dataToDoList[index].done = false;
    const element = dataToDoList[index];
    return res.jsonp(element);
  }
);

server.use(jsonServer.bodyParser);
server.post("/api/auth", (req, res) => {
  if (req.body.login === "admin" && req.body.password === "admin") {
    res.jsonp({ name: "admin" });
  } else {
    res.sendStatus(401);
  }
});

server.post(
  "/api/toDoList/:id/delete",
  checkValidParamIdMiddleware,
  (req, res) => {
    const index = getToDoIndexById(Number(req.params.id));
    const arrWithElement = dataToDoList.splice(index, 1);
    return res.jsonp(arrWithElement[0]);
  }
);

server.post("/api/toDoList", (req, res) => {
  if (
    req.body.inputToDo &&
    typeof req.body.inputToDo === "string" &&
    req.body.inputToDo.trim()
  ) {
    const newId = dataToDoList[dataToDoList.length - 1].id + 1;
    const element = { id: newId, done: false, body: req.body.inputToDo.trim() };
    dataToDoList.push(element);
    return res.jsonp(element);
  }
  res.sendStatus(400);
});

server.use(router);
server.listen(3000, () => {});
