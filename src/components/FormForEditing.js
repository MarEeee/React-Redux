import React from 'react'
import {connect} from "react-redux"
import {createNewUser, deleteUser, changeInfo, userInfo} from "./redux/action"

//классовый компонент.
class FormForEditing extends React.Component{
    // constructor(props){
    //     super(props);
    // }
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

    //FIXME: What's the empty line at the end?
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
        // FIXME: Why declare this array on every render, declare it during component initialization, or outside the component altogether.
        //        And it is correct that it would be an external dictionary, in a separate file
        const positionList = ["Не назначено","Старший разработчик","Младший разработчик","Эйчар","Уборщик"];
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="ФИО"
                    name="FIO"
                    onChange={this.changeInputHandler}
                    value={this.props.items.activeUser.FIO || ""}
                    maxLength="15"></input>
                </div>
                {/*FIXME: Due to poor formatting, it is not clear where the props end and where the content begins.*/}
                <select className="form-select" aria-label="Default select example"
                    name ="position"
                    onChange={this.changeInputHandler}
                    value={this.props.items.activeUser.position || ""}>

                    {positionList.map((value,index)=>{
                        return  <option value={value} key = {index}>{value}</option>
                    })}
                </select>

                <div className="form-group ">
                    <div className="mb-3"></div>
                    {/*FIXME: The indents are broken again*/}
                        <input className="form-control" type="date"  id="example-date-input"
                        name ="birthDay"
                        onChange={this.changeInputHandler}
                        value={this.props.items.activeUser.birthDay || ""}></input>
                </div>




                <div className="form-check">
                    <input className="form-check-input" type="radio"
                     id="flexRadioDefault1"

                     name ="sex"
                     onChange={this.changeInputHandler}
                     checked = {this.props.items.activeUser.sex || ""}
                    ></input>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    М
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio"
                    id="flexRadioDefault1"

                    name ="sex"
                    onChange={this.changeInputHandler}
                    checked = {!this.props.items.activeUser.sex || ""}

                    ></input>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Ж
                    </label>

                </div>



                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="flexCheckDefault"
                    name ="fired"
                    onChange={this.changeInputHandler}
                    checked={this.props.items.activeUser.fired || ""}

                    ></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Уволен
                    </label>
                </div>
                {/* FIXME Correct formatting example

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.submitHandler}
                >
                    Добавить нового сотрудника
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.deleteUser}
                    disabled={Object.keys(this.props.items.activeUser).length===0}
                >
                    Удалить выбранного сотрудника
                </button>

                */}
                <button type="button" className="btn btn-success" onClick = {this.submitHandler}
                 >Добавить нового сотрудника</button>
                <button type="button" className="btn btn-danger"
                 onClick = {this.deleteUser}
                    //FIXME: Whaaat?! Boolean ? true : false. Why are you returning a boolean if the comparison already returns a boolean?
                 disabled = {Object.keys(this.props.items.activeUser).length===0 ? true : false}
                 >Удалить выбранного сотрудника</button>
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


