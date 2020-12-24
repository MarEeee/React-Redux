import React from 'react'
import EmployeeTableItems from './EmployeeTableItems'
import {connect, useDispatch} from "react-redux"
import {createNewUser, userInfo} from "./redux/action"


//функциональный компонент.
const EmployeeTable = ({items, active, setActive}) =>{
    const dispatch = useDispatch();
    function getElem(i, item) {
        setActive(i);
        dispatch(userInfo(item));     //поиска активного элемента
    }


    return(
        /*FIXME: Why table is not table? Use html table*/
        <div className = "container border">
                {/*FIXME: Double indent here*/}
                 <div className= "row border window__header">
                     {/*FIXME: And here is one indent*/}
                     <div className = "col-md-2">Фамилия</div>
                     <div className = "col-md-3">Должность</div>
                     <div className = "col-sm">Дата рождения</div>
                     <div className = "col-sm">Пол</div>
                     {/*FIXME: What a fuck?! What happens to indentation?*/}
                     <div className = "col-sm">Работет ли
                     </div>
                 </div>
            {
                items.items.map((item,i) =>{
                    /*
                    FIXME: Empty tags do not have an end tag
                    FIXME: It is not clear what is happening with the hyphenation, why the closing tag is indented the same as the props
                  */
                    return <EmployeeTableItems
                     item = {item}
                     isActive={active===i}
                     onClick={()=>getElem(i,item)}
                     key={item.id}
                     ></EmployeeTableItems>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);


