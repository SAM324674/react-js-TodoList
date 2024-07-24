import React, { useState } from 'react'

export default function TodoInput({handleClick,newTodo,setNewTodo}) {
   
    
    return (
        <header>
            <div className="todo-input-container">
                <input className="todo-input" placeholder="Enter todo..."
                        value={newTodo}
                         onChange={(e)=>setNewTodo(e.target.value)}
                         onKeyDown={(e)=>
                            {if(e.key==="Enter"&&newTodo){
                                handleClick()
                                setNewTodo('')
                            }}
                         }
                         />
                <button onClick={()=>
                { 
                    
                        handleClick()
                        setNewTodo('')
                    

                }} disabled={!newTodo}>Add</button>
            </div>
        </header>
  )
}
