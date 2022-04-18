import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
var moment = require('moment');

 
function Payment() {

  const [data, setData] = useState([])
  const columns = [
    { title: "繳費紀錄Id", field: "payment_id" },
    { title: "學員名", field: "member_name" },
    { title: "課程名", field: "lesson_name" },
    { title: "繳費日", field: "payment_date" },
    { title: "繳費金額", field: "payment_amount" }
  ]
  useEffect(() => {
    fetch("http://localhost:8080/payments")
    .then(resp => resp.json())  
    .then(resp => {
        for( let i=0;i<resp.length;i++ ) {
            let oldTime = resp[i].payment_date;
            let newTime = moment(oldTime).format('YYYY-MM-DD');
            resp[i].payment_date = newTime;
        }
        setData(resp);
      })
  }, [])

  return (

    <div className="App">
      <h1 align="center">繳費紀錄</h1>
      <h4 align='center'>紀錄</h4>
             
      <MaterialTable
        title="所有繳費紀錄"
        data={data}
        columns={columns}
      />
      <a href='/addPaymentRecord'><Button>新增繳費紀錄</Button></a>

      <a href="/"><button>
              回首頁 
            </button></a>
      
    </div>
  
  );
}

export default Payment;