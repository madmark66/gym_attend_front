import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import Select from 'react-select';


    function AddClassRecord() {
        axios.defaults.withCredentials = true;

        axios.interceptors.request.use(config => {
          config.withCredentials = true;
      
          return config;
        });

        const [members, setMembers] = useState([]);
        const [lessons, setLessons] = useState([]);

        const [member, setMember] = useState('');
        const [lesson, setLesson] = useState('');
        const [date, setDate] = useState('');
        let history = useHistory();

        useEffect(() => {
          //axios.defaults.withCredentials = true;
            fetch("http://localhost:8080/members",{
              credentials: "include"
            }).then(resp => resp.json())
              .then(resp => {
                setMembers(resp)
              })
          }, [])

          useEffect(() => {
            //axios.defaults.withCredentials = true;
            fetch("http://localhost:8080/lessons",{
              credentials: "include"
            }).then(resp => resp.json())
              .then(resp => {
                setLessons(resp)
              })
          }, [])


        let member_options = members.map((i) => ({ label: i.member_name, value: i.member_name }));
        let lesson_options = lessons.map((i) => ({ label: i.lesson_name, value: i.lesson_name }));
          

        const handleSumit = async (e) => {
          e.preventDefault();
          //withCredentials: true
          //axios.defaults.withCredentials = true;

          await axios.post('http://localhost:8080/addNewRecord',{
            member_name : member,
            lesson_name : lesson,
            class_date : date     
          });

          //以下跳轉功能目前無作用，待修    
          await history.push('/ClassRecord'); //新增紀錄OK就轉到classRecord 
          
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