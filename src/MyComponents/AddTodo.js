import React, { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc] = useState("");



    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }
        else{
        props.addTodo(title,desc)  
        setTitle("");
        setDesc("");
        }
    }
    let displa = {
      margin:"10px",
      padding:"10px",
      backgroundColor:"#F1BABA"
    }
  return (
    <div className="container my-3" style={displa}>
        <h3 className="my-3 text-center">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=> {setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=> {setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="centertag">
        <button type="submit" className="btn btn-sm btn-success">
          AddTodo
        </button>
        </div>
      </form>
    </div>
  );
};
