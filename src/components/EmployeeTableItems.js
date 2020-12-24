import React from 'react'
import {connect} from 'react-redux'


function EmployeeTableItems({item, isActive, onClick}) {    
    
    function handleClick(e){
        e.preventDefault();        
        onClick();   
      }

    return(
        <tr className={`row border item ${isActive ? 'border-primary' : ''}`} onClick={(e)=>handleClick(e)}>           
            <td className = "col">{item.FIO}</td>
            <td className = "col">{item.position}</td>
            <td className = "col">{item.birthDay}</td>
            <td className = "col">
                {
                    item.sex ?
                        "М" : "Ж"                    
                }            
            </td>
            <td className = "col">
                {
                    item.fired ?
                        "Уволен":"Работает"
                }
            </td>            
        </tr>
    )
}

export default connect(null, null)(EmployeeTableItems);
