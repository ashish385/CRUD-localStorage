import React, { useEffect, useState } from 'react'
import EditForm from './EditForm';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

   const [todo, setTodo] = useState("");
   const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

   function handleEditInputChange(e) {
     setCurrentTodo({ ...currentTodo, text: e.target.value });
  }
  
  function handleAddFormSubmit(e) {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Math.random().toString(20).substr(2),
          text: todo.trim(),
          date: new Date(),
        },
      ]);
    }
    setTodo("");
  }

   function handleEditFormSubmit(e) {
     e.preventDefault();
     if (currentTodo.text.trim() !== "") {
       handleUpdateTodo(currentTodo.id, currentTodo);
     }
  }
  
  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

   function handleEditClick(todo) {
     setIsEditing(true);
     setCurrentTodo({ ...todo });
   }

  return (
    <div>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <div className="w-11/12 flex flex-col mx-auto mt-5">
        <div className='text-center font-bold text-3xl pb-2 '>Task List</div>
        <div className="w-full flex flex-row justify-around rounded-lg border bg-slate-100  text-lg font-bold ">
          <div className="py-2 w-1/2 text-center">Name</div>
          <div className="py-2 w-1/2 text-center border-l">Action</div>
        </div>
        <div className="w-full flex flex-col justify-around rounded-lg  bg-slate-100  text-md font-semibold  ">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Home
