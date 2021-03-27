import React from 'react'

const Form = (props) => {
  const inputTextHandler=(event)=>{
    props.setInputText(event.target.value);
  }

  const submitTodohandler=(event)=>{
    event.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text:props.inputText,
        completed:false,
        id:Math.random()*1000
      }
    ]);
    props.setInputText("");

  }
  console.log(props)
  const statusHandler=(event)=>{
    props.setStatus(event.target.value);
  }


    return (
        <div>
             <form>
      <input onChange={inputTextHandler} type="text" value={props.inputText} className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitTodohandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>           
        </div>
    )
}

export default Form;
