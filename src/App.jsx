import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos,setTodo]=useState([]);
  const [editMode,setEditMode]=useState();
  const [newTodo,setNewTodo]=useState('');
  function handleDelete(index){
    setTodo(todos.filter((todo,todoIndex)=>todoIndex!==index))
    
  }
  //for toggling edit mode
  function toggleEditMode(index){
      if(editMode===null){
        setEditMode(index);
        console.log("on")
      }
      else{
        setEditMode(null);
        console.log("off")
      }
      
  }
  function handleClick(){
      setTodo([...todos,newTodo])
      console.log(todos);
  }
  return (
    <>
      <main>
        <TodoInput handleClick={handleClick} newTodo={newTodo} setNewTodo={setNewTodo} />
        <TodoList todos={todos} handleDelete={handleDelete} setEditMode={setEditMode} editMode={editMode} toggleEditMode={toggleEditMode}/>
      </main>
    </>
  )
}

export default App
