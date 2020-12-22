import React, { useState } from 'react'
import {connect} from 'react-redux'
import FirstWindow from './components/FirstWindow'
import SecondWindow from './components/SecondWindow'


function App() {
  const [data, setData] = React.useState([
    {id:1, FIO: "Шнуров В.А", position:"Сантехник", birthDay: "1998-05-13", sex: true, fired: false},
    {id:2, FIO: "Теркин А.А", position:"Мусорщик", birthDay: "1972-03-14", sex: true, fired: false},
    {id:3, FIO: "Смолин У.В", position:"Секретарь",birthDay: "1956-07-22", sex: true, fired: true},
    {id:4, FIO: "Шарапова З.Е", position:"Секретарь",birthDay: "1923-07-22", sex: false, fired: false},
  ])

  

  return (
    <div className = "wrapper">
      <div className = "windows border">
                  
        <FirstWindow ></FirstWindow>
         
        <SecondWindow ></SecondWindow>
      </div>        
    </div>    
  )
  
  
}

export default App;
