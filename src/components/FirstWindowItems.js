import React from 'react'
import {connect} from 'react-redux'
import { createNewUser,userInfo} from './redux/action';




function FirstWindowItems({item, isActive, onClick}) {    
    
    function handleClick(e,item){
        e.preventDefault();
        console.log(item);
        onClick();
        userInfo(item.id); // ????
      }

    return(
        <div className={`row border ${isActive ? 'border-primary' : ''}`} onClick={(e)=>handleClick(e,item)}
        >
            {/* <div className = "window__item window__name">{item.id}</div> */}
            <div className = "col-md">{item.FIO}</div>
            <div className = "col-sm">{item.position}</div>
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


// FirstWindowItems.propTypes = {
//     item: PropTypes.object.isRequired,
//     isActive: PropTypes.bool,
//     onClick: PropTypes.func.isRequired
// }


const mapDispatchToProps = {
    createNewUser: createNewUser
}


export default connect(null, mapDispatchToProps)(FirstWindowItems);