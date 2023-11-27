
import {Button} from "@mui/material";
import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import "./Book.css"
import axios from "axios";

const Book = (props) => {
    const history=useNavigate();
    const{_id,name,author,description,price,image}=props.book;
    const deleteHandler=()=>{
        axios.delete(`http://localhost:5000/books/${_id}`)
        .then(res=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/books"))
    }
  return (
    <div className="card">
        <img src={image}alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <Button component={Link}to={`/books/${_id}`} sx={{mt:'auto'}}>update</Button>
        <Button onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>

      
    </div>
  );
  
};

export default Book;
