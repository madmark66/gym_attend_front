import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
var moment = require('moment');


function RemainingDeadline() {

  const [data, setData] = useState([])
  const columns = [
    { title: "學員名", field: "member_name" },
    { title: "課程名", field: "lesson_name" },
    { title: "最近繳費後剩餘堂數", field: "remain" },
    { title: "使用期限", field: "deadline" },
    { title: "上課過日期", field: "used_class_date" }
  ]

  //1.用不同API去產生上面的資料? 2.如何讓API資料間自動產生連結 3.如何把不同來源資料塞進MaterialTable
  //4.用一個API可能嗎?--先在後端產生一個包含所需資訊的API就好(SQL query)


  useEffect(() => {
    fetch("http://localhost:8080/remainingDeadline")
    .then(resp => resp.json())  
    .then(resp => {
        for( let i=0;i<resp.length;i++ ) {
            let oldTime = resp[i].used_class_date;
            let newTime = moment(oldTime).format('YYYY-MM-DD');
            resp[i].used_class_date = newTime;
        }
        setData(resp);
      })
  }, [])

  return (

    <div className="App">
      <h1 align="center">學員剩餘堂數/上課期限/上課日期</h1>
             
      <MaterialTable
        title="學員剩餘堂數/上課期限/上課日期"
        data={data}
        columns={columns}
      />
      
      
    </div>
  
  );
}

export default RemainingDeadline;