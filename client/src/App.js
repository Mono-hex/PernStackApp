import React, { Fragment } from "react";
import InputTodo from "./Components/InputTodo";
import ListTodos from "./Components/ListTodos";
import './App.css';

function App() {
  return (
  <Fragment>
      <div className="container">
       <InputTodo />
       <ListTodos />
      </div>
  </Fragment>
  );
}

export default App;
