import React from 'react';


const Todo = ({todo, removeTodo, completarTodo}) => {

 


  return (
    <div className='todo-container'>
          <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <h2>{todo.text}</h2>
            <p className='categoria'> Categoria:{todo.category}</p>
          </div>
          <div className="buttons">
            <button className="complete" onClick={() => completarTodo(todo.id)}>Completar</button>
            <button className="remove" onClick={()=> removeTodo(todo.id)} >X</button>
          </div>

          </div>
  )
}

export default Todo