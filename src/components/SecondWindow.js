import { bool } from 'prop-types';
import React from 'react'
import {connect} from "react-redux"
import {createNewUser, deleteUser} from "../components/redux/action"


class SecondWindow extends React.Component{
    constructor(props){
        super(props);
         
    }
    
    
    handleOptionChange = e => {
        this.setState(
            {
                selectedOption:e.target.value
            }
        )
    }

    submitHandler = e => {
        e.preventDefault();        

        const newUser = {
            id: Date.now().toString(),
            FIO: "Имя",
            position:"Должность",
            birthDay: "год/месяц/день",
            sex: "Пол" ,
            fired: "Работат ли"
        };
        console.log(this.props);
        this.props.createNewUser(newUser);
    }

    // changeInputHandler = e => {
    //     e.persist();
    //     this.setState(prev=>({...prev, ...{
    //         [e.target.name]: e.target.value
    //     }}))
    // }
    changeInputHandler = ({ target: t }) => {
        this.setState(state => ({
          ...state,
          [t.name]: t.type === 'checkbox' ? t.checked : t.value,
        }));
      }

    isFormValid = () => {
        const {FIO, position, birthDay, sex, fired} = this.state;
        console.log(FIO && position && birthDay && sex && fired);
        return FIO && position && birthDay && sex && fired 
    }

    deleteUser = () => {
        console.log(this.props.items);
        
    }
    

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-group mb-3">                    
                    <input type="text" className="form-control" placeholder="ФИО"
                    name="FIO" 
                    onChange={this.changeInputHandler}
                    value={this.props.FIO}
                    ></input>
                </div>
                <select className="form-select" aria-label="Default select example"
                name ="position"
                onChange={this.changeInputHandler}> 
                    <option defaultValue = "Выбирите должность">Выбирите должность</option>       
                    <option value="Старший разработчик">Старший разработчик</option>
                    <option value="Младший разработчик">Младший разработчик</option>
                    <option value="Эйчар">Эйчар</option>
                    <option value="Уборщик">Уборщик</option>
                </select>

                <div className="form-group ">                
                    <div className="mb-3"></div>
                        <input className="form-control" type="date"  id="example-date-input"
                        name ="birthDay"
                        onChange={this.changeInputHandler}></input>  
                </div>
              


               
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                     id="flexRadioDefault1"
                     value ="М"
                     name ="sex"
                     onChange={this.changeInputHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    М
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value ="Ж"
                    name ="sex"
                    onChange={this.changeInputHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Ж
                    </label>
                
                </div>

                
                
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="flexCheckDefault"
                    name ="fired"
                    onChange={this.changeInputHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Уволен
                    </label>
                </div>
                <button type="button" className="btn btn-success" onClick = {this.submitHandler}
                 disabled = {!this.isFormValid}
                 >Добавить нового сотрудника</button>
                <button type="button" className="btn btn-danger"
                 onClick = {this.deleteUser}>Удалить выбранного сотрудника</button>  
            </form>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.items.items);
    return {
        items: state.items.items
    }
}

const mapDispatchToProps = {
    createNewUser: createNewUser,
    deleteUser:deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondWindow);


