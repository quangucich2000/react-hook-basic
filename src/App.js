import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/colorbox/index';
import TodoList from './components/TodoList/index'
import TodoForm from './components/TodoForm/index'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ])

  function handleTodoClick(todo) {
    const indexTodo = todoList.findIndex(x => x.id === todo.id);

    if (indexTodo < 0) return;
    let newTodoList = [...todoList];
    newTodoList.splice(indexTodo, 1);
    setTodoList(newTodoList);
  }

  function onSubmit(value) {
    const newItem = {
      id: todoList.length + 1,
      title: value,
    }

    let newList = [...todoList];
    newList.push(newItem);
    setTodoList(newList);
  }

  return (
    <div className="app">
      <h1>Hello World</h1>
      <ColorBox></ColorBox>

      <TodoForm onSubmit={onSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default App;
