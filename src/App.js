import React from 'react'

import EmployeeTable from './components/EmployeeTable'
import FormForEditing from './components/FormForEditing'


function App() { 
  const [active, setActive] = React.useState(null);    
  return (
    <div className = "wrapper">
      <div className = "windows border">                    
        <EmployeeTable active = {active}  setActive = {setActive}></EmployeeTable>         
        <FormForEditing active = {active}  setActive = {setActive}></FormForEditing> 
      </div>        
    </div>    
  ) 
}
export default App;
