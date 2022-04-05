import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


import Select from 'react-select';


    function AddClassRecord() {

        const [members, setMembers] = useState([]);
        const [lessons, setLessons] = useState([]);

        const [member, setMember] = useState('');
        const [lesson, setLesson] = useState('');
        const [date, setDate] = useState('');

        useEffect(() => {
            fetch("http://localhost:8080/members")
              .then(resp => resp.json())
              .then(resp => {
                setMembers(resp)
              })
          }, [])

          useEffect(() => {
            fetch("http://localhost:8080/lessons")
              .then(resp => resp.json())
              .then(resp => {
                setLessons(resp)
              })
          }, [])


        let member_options = members.map((i) => ({ label: i.member_name, value: i.member_name }));
        let lesson_options = lessons.map((i) => ({ label: i.lesson_name, value: i.lesson_name }));
          

        const handleSumit = async (e) => {
          e.preventDefault();
          await axios.post('http://localhost:8080/addNewRecord',{
            member_name : member,
            lesson_name : lesson,
            class_date : date          
          });
      }


        return (
          <div>
            <h1>
              新增上課紀錄
            </h1>

            <form className="form" onSubmit={ handleSumit }>
                選擇學員姓名 : <Select options={member_options} onChange={ (e) => setMember(e.value)} />
                選擇課程 : <Select options={lesson_options} onChange={ (e) => setLesson(e.value)} />
                選擇上課日 : <input className='payDay' type="date" onChange={ (e) => setDate(e.target.value) }></input>
                <Button type="submit" >送出上課紀錄</Button>
           </form>

            <a href="/"><button>
              回首頁 
            </button></a>
            
            
            
          </div>
        );

    }

    export default AddClassRecord;