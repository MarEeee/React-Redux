import React from 'react'
import FirstWindowItems from './FirstWindowItems'
import {connect, useDispatch} from "react-redux"
import {createNewUser, userInfo} from "./redux/action"


//функциональный компонент.
const FirstWindow = ({items, active, setActive}) =>{
    const dispatch = useDispatch();
    function getElem(i, item) {                 
        setActive(i);        
        dispatch(userInfo(item));     //поиска активного элемента   
    }

    
    return(
        <div className = "container border">           
                 <div className= "row border window__header">           
                     <div className = "col-md-2">Фамилия</div>
                     <div className = "col-md-3">Должность</div>
                     <div className = "col-sm">Дата рождения</div>
                     <div className = "col-sm">Пол</div>
                     <div className = "col-sm">Работет ли
                     </div>            
                 </div>
                 {
                items.items.map((item,i) =>{
                    return <FirstWindowItems
                     item = {item}
                     isActive={active===i}
                     onClick={()=>getElem(i,item)}
                     key={item.id}
                     
                     ></FirstWindowItems>
                })
            }            
        </div>
    )
}



const mapStateToProps = state => {    
    return {
        items: state.items
    }
}

const mapDispatchToProps = {
    createNewUser:createNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstWindow);


