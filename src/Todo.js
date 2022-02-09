
import React from "react"


const todo=({isCompleted,id,todo,completed,deleteTodo})=>{

    const strikeThrough=isCompleted===true?{textDecoration: "line-through"}:{textDecoration: "None"}
    return(
        <>
            <li><span style={strikeThrough} onClick={()=>completed(id)}>{todo}</span> <button onClick={()=>deleteTodo(id)}>❌</button></li> 
        </>
    )
}

export default todo;