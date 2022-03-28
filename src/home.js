import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {

  const [data, setData] = useState([])
  const columns = [
    { title: "classRecordId", field: "classRecordId" },
    { title: "member_name", field: "member_name" },
    { title: "lesson_name", field: "lesson_name" },
    { title: "class_date", field: "class_date" }
  ]
  useEffect(() => {
    fetch("http://localhost:8080/class-records")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (

    <div className="App">
      <h1 align="center">GYM</h1>
      <h4 align='center'>Class Records</h4>
             
      <MaterialTable
        title="所有上課紀錄"
        data={data}
        columns={columns}
      />
      <a href='/addClassRecord'><Button>新增上課紀錄</Button></a>
      
    </div>
  
  );
}

export default Home;