import { bool } from 'prop-types';
import React from 'react'


class SecondWindow extends React.Component{
    state = {
        id: null,
        FIO: "",
        position:"",
        birthDay: "",
        sex: bool,
        fired: bool
    };
    
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
            FIO: this.state.FIO,
            position:this.state.position,
            birthDay: this.state.birthDay,
            sex: this.state.sex ,
            fired: this.state.fired
        }
        console.log(this.state.fired.checked);
        console.log(this.state.sex);
      
        this.setState({
            FIO: ""
        })
    }

    changeInputHandler = e => {
        e.persist();
        this.setState(prev=>({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    isFormValid = () => {
        const {FIO, position, birthDay, sex, fired} = this.state;
        console.log(FIO && position && birthDay && sex && fired);
        return FIO && position && birthDay && sex && fired 
    }
    

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="input-group mb-3">                    
                    <input type="text" className="form-control" placeholder="ФИО"
                    name="FIO" 
                    onChange={this.changeInputHandler}></input>
                </div>
                <select className="form-select" aria-label="Default select example"
                name ="position"
                onChange={this.changeInputHandler}>        
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
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                     name ="sex"
                     onChange={this.changeInputHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    М
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
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
                <button type="button" className="btn btn-success" type="submit" disabled = {!this.isFormValid}>Добавить нового сотрудника</button>
                <button type="button" className="btn btn-danger" type="submit">Удалить выбранного сотрудника</button>  
            </form>
        );
    }
}

export default SecondWindow;


