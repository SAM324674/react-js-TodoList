import React, { useState } from 'react'

export default function TodoList({todos,handleDelete,editMode,setEditMode,toggleEditMode}) {
   
    // function handleChange(e){
    //     setUpdateTask(e.target.value);
    // }
    return (
        <>
            <ul className="todo-list">
            {todos.map((todo,todoIndex)=>{
                return (
                        // <>
                            <li className='todo' key={todoIndex}>

                                     
                                     {(editMode===null?<input type="text"></input>:<span>{todo}</span>)}
                                       
                                
                                <div className="todo-list-option">
                                        <button onClick={()=>{handleDelete(todoIndex)}}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                        <button onClick={()=>{
                                            toggleEditMode(todoIndex)
                                        }}>
                                            <i className="fa-solid fa-pen"></i>
                                        </button>
                                </div>
                            </li>
                        // </>
                )
            })}

            </ul>
        </>
    )

}
