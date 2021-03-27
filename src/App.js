
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");

  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=>{
    filterHandler();
    
  },[todos,status])


  const filterHandler=()=>{
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo)=>todo.completed === true))
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=>todo.completed === false))
        break;
    
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos=()=>{
    if(localStorage.getItem("todos")===null)
    {
      localStorage.setItem("todos",JSON.stringify([]));

    }
    else{
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Thackeray's Todo App</h1>
      </header>
      <Form 

      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      setStatus={setStatus} 
      
      />

      <TodoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos}/>
    </div>
  );
}

export default App;
