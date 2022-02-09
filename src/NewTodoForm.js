import React,{useState} from "react";


const NewTodoForm=({addTodo})=>{

    const INITIAL_FORM_DATA={id:"",todo:'',isCompleted:false}
    const [formData,setFormData]=useState(INITIAL_FORM_DATA)

    const handleChange=(e)=>{
        const {name,value}=e.target

        setFormData(data=>({...data,
        [name]:value}))
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        addTodo({...formData})
        setFormData(INITIAL_FORM_DATA)
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo </label>
                <input
                    id="todo"
                    name="todo"
                    type="text"
                    placeholder="I need to do ..."
                    value={formData.todo}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )


}

export default NewTodoForm;