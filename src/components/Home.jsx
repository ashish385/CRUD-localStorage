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

  let initialValue = {
    title: "",
    desc:''
  }

   const [formdata, setFormdata] = useState(initialValue);
   const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    const { name, value } = e.target;
    setFormdata({...formdata,[name]:value});
  }

  function handleEditInputChange(e) {
    const { name, value } = e.target;
     setCurrentTodo({ ...currentTodo, [name]:value });
  }
  
  function handleAddFormSubmit(e) {
    e.preventDefault();
    console.log("formdata",formdata);
    if (formdata.title.trim() !== "" || formdata.desc.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Math.random().toString(20).substr(2),
          title: formdata.title.trim(),
          desc:formdata.desc.trim(),
          date: new Date(),
        },
      ]);
    } 
    console.log("formdata end", formdata);
    setFormdata(initialValue);
  }


   function handleEditFormSubmit(e) {
     e.preventDefault();
     if (currentTodo.title.trim() !== "" || currentTodo.desc.trim() !== "") {
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

  function handleEditClick(data) {
     console.log("todo", data);
     setIsEditing(true);
    setCurrentTodo({ ...data });
    console.log(currentTodo);
   }

  return (
    <div className="w-full h-auto mb-5">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          formdata={formdata}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <div className="w-11/12 flex flex-col mx-auto mt-5">
        <div className="text-center font-bold text-3xl pb-2 ">Task List</div>
        <div className="w-full flex flex-row justify-around rounded-lg border bg-slate-100  text-lg font-bold ">
          <div className="py-2 w-1/2 text-center">Title</div>
          <div className="py-2 w-1/2 text-center border-l">Description</div>
          <div className="py-2 w-1/2 text-center border-l">Action</div>
        </div>
        <div className="w-full flex flex-col justify-around rounded-lg  bg-slate-100  text-md font-semibold  ">
          {todos.map((data, index) => (
            <TodoItem
              key={index}
              formdata={data}
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
