import React from 'react'

import FirstWindow from './components/FirstWindow'
import SecondWindow from './components/SecondWindow'


function App() { 
  const [active, setActive] = React.useState(null);    
  return (
    <div className = "wrapper">
      <div className = "windows border">                    
        <FirstWindow active = {active}  setActive = {setActive}></FirstWindow>         
        <SecondWindow active = {active}  setActive = {setActive}></SecondWindow> 
      </div>        
    </div>    
  ) 
}
export default App;
