import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


    function Revenue() {

        
        const [fromDate, setFromDate] = useState('');
        const [toDate, setToDate] = useState('');

        const [revenue, setRevenue] = useState();


          useEffect(() => {
            fetch("http://localhost:8080/revenue")
              .then(resp => resp.json())
              .then(resp => {
                setRevenue(resp)
              })
          }, [])

          

        const handleSumit = async (e) => {
          e.preventDefault();
          await axios.post('http://localhost:8080/revenue',{
            fromDate : fromDate,
            toDate : toDate,        
          });
      }


        return (
          <div>
            <h1>
              選擇營收查詢起訖時間
            </h1>

            <form className="form" onSubmit={ handleSumit }>
                選擇起算日 : <input className='fromDay' type="date" onChange={ (e) => setFromDate(e.target.value) }></input>
                選擇止算日 : <input className='toDay' type="date" onChange={ (e) => setToDate(e.target.value) }></input>
                <Button type="submit" >查詢學員剩餘堂數</Button>
           </form>

           <h1>
              選擇區間營收 : 台幣 {revenue} 元 
            </h1>

            <a href="/"><button>
              回首頁 
            </button></a>
            
            
            
          </div>
        );

    }

    export default Revenue;