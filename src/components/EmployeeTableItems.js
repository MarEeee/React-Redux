import React from 'react'
import {connect} from 'react-redux'


function EmployeeTableItems({item, isActive, onClick}) {    
    
    function handleClick(e){
        e.preventDefault();        
        onClick();   
      }

    return(
        <div className={`row border ${isActive ? 'border-primary' : ''}`} onClick={(e)=>handleClick(e)}
        >           
            <div className = "col-md-2">{item.FIO}</div>
            <div className = "col-md-3">{item.position}</div>
            <div className = "col-sm">{item.birthDay}</div>
            <div className = "col-sm">                {
                    item.sex ?
                        "М" : "Ж"                    
                }            
            </div>
            <div className = "col-sm">{
                    item.fired ?
                        "Уволен":"Работает"
            }
            </div>            
        </div>
    )
}


export default connect(null, null)(EmployeeTableItems);