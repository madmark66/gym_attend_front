import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


    function PersonShowedUp() {

        const [showedUpDate, setShowedUpDate] = useState('');

        const [person, setPerson] = useState([]);


        const handleSumit = async (e) => {
          e.preventDefault();
          const data = await axios.get('http://localhost:8080/personShowedUp',
          { params: { showedUpDate : showedUpDate } });
          await setPerson(data.data.map((item)=>{item.member_name}));
        }


        return (
          <div>
            <h1>
              學員出席日
            </h1>

            <form className="form" onSubmit={ handleSumit }>
                選擇出席日 : <input className='showedUpDate' type="date" onChange={ (e) => setShowedUpDate(e.target.value) }></input>
                <Button type="submit" >查詢出席學員</Button>
           </form>

           <h1>
              出席人及課程 :  {person}  
            </h1>

            <a href="/"><button>
              回首頁 
            </button></a>
            
            
            
          </div>
        );

    }

    export default PersonShowedUp;