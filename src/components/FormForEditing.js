import React from 'react'
import {connect} from "react-redux"
import {createNewUser, deleteUser, changeInfo, userInfo} from "./redux/action"

const positionList = ["Не назначено","Старший разработчик","Младший разработчик","Эйчар","Уборщик"];

//Пример реализации классовый компонента.
class FormForEditing extends React.Component{

    handleOptionChange = e => {
        this.setState(
            {
                selectedOption:e.target.value
            }
        )
    }

    submitHandler = e => {
        e.preventDefault(); 
        let newUser = this.props.createNewUser(); // создаем нового пользователя
        this.props.userInfo(newUser.payload); // закватывает текущего юзера для работы в форме
        this.props.setActive(this.props.items.items.length); // добавляем выделение на нового пользователя
        
    }

    changeInputHandler = ({ target: t }) => {
        this.setState(state => ({
          ...state,
          [t.name]: t.type === 'checkbox' || t.type === "radio"  ? t.checked : t.value,
          
        }));        
        
        let newValue;
        if(t.type === "radio"){
            newValue = !this.props.items.activeUser.sex;
        }else{
            newValue = t.type === 'checkbox'  ? t.checked : t.value;
        }
                
        const valueForUpdate = {
            id: this.props.items.activeUser.id,
            box: t.name,
            newValue: newValue 
        };        
        this.props.changeInfo(valueForUpdate);
      }

    deleteUser = () => {
       this.props.deleteUser(this.props.items.activeUser);
       this.props.userInfo();
       this.props.setActive(null);
    }
    
    
    render() {        
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-group mb-3">                    
                    <input type="text" className="form-control"
                        placeholder="ФИО"
                        name="FIO" 
                        onChange={this.changeInputHandler}
                        value={this.props.items.activeUser.FIO || ""}
                        maxLength="15"
                        disabled={Object.keys(this.props.items.activeUser).length === 0? true : false}>                            
                    </input>
                </div>

                <select className="form-select" aria-label="Default select example"
                    name ="position"
                    onChange={this.changeInputHandler}
                    value={this.props.items.activeUser.position || ""}
                    disabled={Object.keys(this.props.items.activeUser).length === 0? true : false}
                >
                    {positionList.map((value,index)=>{
                        return  <option value={value} key = {index}>{value}</option>
                    })}

                </select>

                <div className="form-group ">
                    <div className="mb-3"></div>
                        <input className="form-control" type="date"  id="example-date-input"
                        name ="birthDay"
                        onChange={this.changeInputHandler}
                        value={this.props.items.activeUser.birthDay || ""}
                        disabled={Object.keys(this.props.items.activeUser).length === 0? true : false}
                        onKeyDown={(e) => e.preventDefault()}></input>
                </div>
               
               <div className = "radio">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" 
                            id="flexRadioDefault1"                     
                            name ="sex"
                            onChange={this.changeInputHandler}
                            checked = {this.props.items.activeUser.sex || ""}
                            disabled={Object.keys(this.props.items.activeUser).length === 0? true : false}>                         
                        </input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            М
                        </label>
                    </div>
                    <div className="form-check radio_elem">
                        <input className="form-check-input " type="radio" 
                            id="flexRadioDefault1"                    
                            name ="sex"
                            onChange={this.changeInputHandler}
                            checked = {!this.props.items.activeUser.sex || ""}
                            disabled={Object.keys(this.props.items.activeUser).length === 0? true : false}>                                                   
                        </input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Ж
                        </label>                
                    </div>
                </div>      
                
                <div className="form-check checkbox">
                    <input className="form-check-input" type="checkbox"  id="flexCheckDefault"
                        name ="fired"
                        onChange={this.changeInputHandler}
                        checked={this.props.items.activeUser.fired || ""}
                        disabled={Object.keys(this.props.items.activeUser).length === 0? true : false}>
                    </input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Уволен
                    </label>
                </div>
                <div className = "buttons">
                    <button 
                        type="button" 
                        className="btn btn-success" 
                        onClick = {this.submitHandler}
                    >
                        Добавить нового сотрудника
                    </button>
                    <button
                        type="button" 
                        className="btn btn-danger"
                        onClick = {this.deleteUser}
                        disabled = {Object.keys(this.props.items.activeUser).length===0 ? true : false}
                    >
                        Удалить выбранного сотрудника
                    </button>
                </div>  
            </form>
        );
    }
}

const mapStateToProps = state => {    
    return {
        items: state.items,
    }
}

const mapDispatchToProps = {
    createNewUser: createNewUser,
    deleteUser:deleteUser,
    changeInfo:changeInfo,
    userInfo: userInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(FormForEditing);
