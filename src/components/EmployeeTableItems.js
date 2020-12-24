import React from 'react'
import {connect} from 'react-redux'


function EmployeeTableItems({item, isActive, onClick}) {

    /*FIXME: The indents are broken again*/
    function handleClick(e){
        e.preventDefault();
        onClick();
      }

    return(
        /*
        FIXME: Why is it so with ">", why is she not worthy of being on the same line with everyone?
        <div
            className={`row border ${isActive ? 'border-primary' : ''}`}
            onClick={(e)=>handleClick(e)}
        >

        */
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
               /*
               FIXME: The indents are broken again

               {item.fired ? "Уволен" : "Работает"}

               or (This style for long expression)

               {item.fired
                   ? "Уволен"
                   : "Работает"
               }
               */
                    item.fired ?
                        "Уволен":"Работает"
            }
            </div>
        </div>
    )
}


export default connect(null, null)(EmployeeTableItems);
