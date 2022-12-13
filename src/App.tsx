import React, {useContext} from "react";
import AuthPage from "./pages/AuthPage";
import {Auth} from "./components/AuthContext";
import TodoListPage from "./pages/TodoListPage";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  const {isAuth} = useContext(Auth)
  if (isAuth) {return <TodoListPage/>}
  return <AuthPage />;
});
export default App;
