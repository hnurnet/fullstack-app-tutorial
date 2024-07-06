import React, { useState} from 'react';
import axios from "axios";
import {useNavigate,Link} from "react-router-dom"

function Create() {
  const [values,setValues] = useState({name:'',email:'',age:'',gender:''});
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/add_user", values)
    .then((res) => {
      navigate("/")
      console.log(res)
    })
    .catch((err) => console.log(err))};

  
  return (
    <div className='d-flex justify-content-center align-items-center bg-success p-2 text-dark bg-opacity-10'>
   <div className='mt-2 w-50'>
    <div className='d-flex justify-content-end'>
      <Link to="/" className="btn btn-success btn">Home</Link>
    </div>
   <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label><strong>Name</strong></label>
        <input type="text" placeholder="Enter name" name="name" className='form-control'
        onChange={(e)=>setValues({...values,name:e.target.value})} />
      </div>
      <div className="mb-3">
        <label><strong>Email</strong></label>
        <input type="email" placeholder="Enter email" name="email" className='form-control'
         onChange={(e)=>setValues({...values,email:e.target.value})}/>
      </div>
      <div className="mb-3">
        <label><strong>Age</strong></label>
        <input type="number" placeholder="Enter Age" name='age' className='form-control'
         onChange={(e)=>setValues({...values,age:e.target.value})}/>
      </div>
      <div className="mb-3" >
        <label><strong>Gender</strong></label>
        <input type="text" placeholder="Enter Gender" name='gender' className='form-control'
         onChange={(e)=>setValues({...values,gender:e.target.value})}/>
      </div>
      <button className="btn btn-success" type="submit">Submit</button>
    </form>

   </div>
      </div>
  )
}

export default Create