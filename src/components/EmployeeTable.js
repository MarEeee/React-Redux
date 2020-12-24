import React from 'react'
import EmployeeTableItems from './EmployeeTableItems'
import {connect, useDispatch} from "react-redux"
import {createNewUser, userInfo} from "./redux/action"


//Пример реализации функциональный компонент.
const EmployeeTable = ({items, active, setActive}) =>{
    const dispatch = useDispatch();
    function getElem(i, item) {
        setActive(i);
        dispatch(userInfo(item)); //поиска активного элемента   
    }
    
    return(
        <table className = "table">
            <thead>
                 <tr className= "row  window__header">
                     <th className = "col">Фамилия</th>
                     <th className = "col">Должность</th>
                     <th className = "col">Дата рождения</th>
                     <th className = "col">Пол</th>
                     <th className = "col">Работет ли</th>
                 </tr>
            </thead>
            <tbody>
            {
                items.items.map((item,i) =>{
                    return <EmployeeTableItems
                        item = {item}
                        isActive={active===i}
                        onClick={()=>getElem(i,item)}
                        key={item.id}       
                     ></EmployeeTableItems>
                })
            }
            </tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);
