import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
var moment = require('moment');


function Home() {

  const [data, setData] = useState([])
  const columns = [
    { title: "課程紀錄Id", field: "classRecordId" },
    { title: "學員名", field: "member_name" },
    { title: "課程名", field: "lesson_name" },
    { title: "上課日", field: "class_date" }
  ]
  useEffect(() => {
    fetch("http://localhost:8080/class-records")
    .then(resp => resp.json())  
    .then(resp => {
        for( let i=0;i<resp.length;i++ ) {
            let oldTime = resp[i].class_date;
            let newTime = moment(oldTime).format('YYYY-MM-DD');
            resp[i].class_date = newTime;
        }
        setData(resp);
      })
  }, [])

  return (

    <div className="App">
      <h1 align="center">GYM首頁</h1>
      <h4 align='center'>Class Records</h4>
             
      <MaterialTable
        title="所有上課紀錄"
        data={data}
        columns={columns}
      />
      <a href='/addClassRecord'><Button>新增上課紀錄</Button></a>
      <a href='/payment'><Button variant="secondary">所有繳費紀錄</Button></a>
      <a href='/revenue'><Button>查詢營收</Button></a>
      <a href='/personShowedUp'><Button variant="danger">查詢某日出席學員</Button></a>
      <a href='/remainingDeadline'><Button>查詢學員剩餘堂數/上課期限/上課日期</Button></a>
      
    </div>
  
  );
}

export default Home;