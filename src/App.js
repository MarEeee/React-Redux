import React from 'react'

import EmployeeTable from './components/EmployeeTable'
import FormForEditing from './components/FormForEditing'


function App() {
  const [active, setActive] = React.useState(null);
  return (
    <div className = "wrapper">
      <div className = "windows border">
          {/*
            FIXME: Empty tags do not have an end tag
            FIXME: Bad styling with space between name and value in tag
          */}
        <EmployeeTable active = {active}  setActive = {setActive}></EmployeeTable>
        <FormForEditing active = {active}  setActive = {setActive}></FormForEditing>
      </div>
    </div>
  )
}
export default App;
