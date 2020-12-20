import React from 'react'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import { createNewUser } from './redux/action';




function FirstWindowItems({item, isActive, onClick}) {
    
    function handleClick(item){
        // e.preventDefault();
        console.log(item.FIO, item.position);
      }
    return(
        <div className={`window__items ${isActive ? 'active' : ''}`} onClick={onClick}>
            {/* <div className = "window__item window__name">{item.id}</div> */}
            <div className = "window__item window__name">{item.FIO}</div>
            <div className = "window__item window__name">{item.position}</div>
            <div className = "window__item window__name">{item.birthDay}</div>
            <div className = "window__item window__name">                {
                    item.sex ?
                        "М" : "Ж"                    
                }            
            </div>
            <div className = "window__item window__name">{
                    item.fired ?
                        "Уволен":"Работает"
            }
            </div>            
        </div>
    )
}


FirstWindowItems.propTypes = {
    item: PropTypes.object.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}


const mapDispatchToProps = {
    createNewUser: createNewUser
}


export default connect(null, mapDispatchToProps)(FirstWindowItems);