import React, {useContext} from "react";
import AuthPage from "./pages/AuthPage";
import {Auth} from "./components/AuthContext";
import {observer} from "mobx-react-lite";
import ToDoListPage from "./pages/TodoListPage";

const App = observer(() => {
  const {isAuth} = useContext(Auth)
  if (isAuth) {return <ToDoListPage/>}
  return <AuthPage />;
});
export default App;
