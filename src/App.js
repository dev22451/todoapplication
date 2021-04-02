import React from 'react'
import './App.css'
import TodoContainer from './Container/TodoContainer'


function App() {
  return (
    <div >

      <div className="todo-container">
         <h2 className="todo-heading">Todo App</h2>
         <TodoContainer />
      </div>
         
         
    </div>
  );
}

export default App;
