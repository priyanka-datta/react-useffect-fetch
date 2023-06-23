import React, { useState,useEffect } from 'react'

function Students() {

const [students,setStudents] = useState([]);
const [loading,setLoading] = useState(false);

React.useEffect(() => {
    getAllStudents()
}, [])

const getAllStudents = async () =>{
    setLoading(true);
    const response = await fetch("http://localhost:8080/students");
    if(response.status === 200)  {
        const data = await response.json();
        setStudents(data);
        setLoading(false);
    }
    }   

    return (
        <div class="container text-center">
            {
                students.map(student=> {
                    return (
                        <div key={student.id} class="row justify-content-center p-1 m-3" 
                        style={{height:"200px",
                        backgroundColor:"honeydew"}}>
                            <div class="col-md-12">
                               <h2> {student.name}</h2>
                            </div>
                            <div class="col-md-12">
                               <h4> Total Marks : {student.totalMarks}</h4>
                            </div>
                            <div class="col-md-12">
                               <h4> Branch : {student.branch}</h4>
                            </div>
                            <div class="btn btn-success" style={{width:"100px",height:"40px"}}>Nominate</div>
                        </div>
                    )
                })
            }
        </div>
      )
    
}




export default Students;