import React, { useState,useEffect } from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function Home() {
  const [data,setData] = useState([]);
  const [deleted, setDeleted] = useState(true);

  useEffect(()=>{
    if(deleted){
        setDeleted(false)
    axios.get('/students')
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>console.log(err))
}
}, [deleted])
  const handleDelete = (id) => {
    axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))

  }


  return (
    
       <div className='m-2'> 
        <h3>Students</h3>
        <div className='d-flexn mb-2 btn-sm'>
            <Link className='btn btn-success' to='/create'>Add Student</Link>
        </div>

        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((student) => {
          return (<tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>
          <Link to={`/read/${student.id}`}><ChromeReaderModeOutlinedIcon className='m-2'/></Link>
          <Link to={`/edit/${student.id}`}><ModeEditOutlineOutlinedIcon /></Link>
          <button onClick={()=>handleDelete(student.id)} className='btn btn-default' ><DeleteOutlineOutlinedIcon/></button>
            </td>
          </tr>
         
           
          )

        })
       }
       
      </tbody>
    </Table>

        </div>

       </div>
     
  )
}

export default Home