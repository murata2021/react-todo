import React,{useState} from "react";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo";
import uuid from 'react-uuid';



const TodoList=()=>{

    const INITIAL_TODOS_STATE= JSON.parse(localStorage.getItem("todos"))||[];

    // const INITIAL_TODOS_STATE= [];

    const [todos,setTodos]=useState(INITIAL_TODOS_STATE)

    const addTodo=async (newTodo)=>{

        newTodo.id=uuid()
        // console.log(newTodo)
        await setTodos(todos=> {

            console.log(todos)
            
            return [...todos,{...newTodo}]
        })
        // localStorage.setItem("todos", JSON.stringify(todos));
    }

    
    console.log(todos)

    const completed=(id)=>{
        const copyList=todos.map(todo=>{
            if (todo.id===id){
                todo.isCompleted=!todo.isCompleted
            }
            return todo
        })

        // console.log(copyList)
        setTodos(todos=>copyList)
        console.log(todos)
        // localStorage.setItem("todos", JSON.stringify(todos));

    }

    const deleteTodo=(id)=>{

        let copyList=[...todos.filter(todo=>todo.id!==id)]
        setTodos(todos=>copyList)

        // localStorage.setItem("todos", JSON.stringify(todos));

    }

    // console.log(todos)

    localStorage.setItem("todos", JSON.stringify(todos));

    


    return (
        <div>
            <h2>Things need to be done!</h2>
            <NewTodoForm addTodo={addTodo} />
            {todos.length>0?<h4>My Todo List</h4>:null}
            <ul>
                {todos.map(todo=><Todo id={todo.id} isCompleted={todo.isCompleted} key={todo.id} todo={todo.todo} completed={completed} deleteTodo={deleteTodo}/>)}
            </ul>
            
        </div>
    )

}

export default TodoList;