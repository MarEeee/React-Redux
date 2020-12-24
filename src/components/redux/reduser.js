import {CREATE_NEW_USER, DELETE_USER, USER_INFO, CHANGE_INFO} from './types'

const initialState = {
    items: [
        {id:1, FIO: "Шнуров В.А", position:"Старший разработчик", birthDay: "1998-05-13", sex: true, fired: false},
        {id:2, FIO: "Теркин А.А", position:"Младший разработчик", birthDay: "1972-03-14", sex: true, fired: false},
        {id:3, FIO: "Смолин У.В", position:"Эйчар",birthDay: "1956-07-22", sex: false, fired: true},
        {id:4, FIO: "Шарапова З.Е", position:"Уборщик",birthDay: "1923-07-22", sex: false, fired: false},
    ],
    activeUser: {}
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:      //Создание нового пользователя      
            return {...state, items: state.items.concat([action.payload])}
        
        case DELETE_USER: //Удаление выбранного пользователя 
            return {...state, items: state.items.filter((item)=>{
                return item.id !== action.payload.id;
            })
        }
        case USER_INFO: // Получение текущего пользователя            
            return {...state, activeUser: action.payload}

        case CHANGE_INFO: //Обновления иформации о пользователе 
            return {...state, items: state.items.map((item)=>{
                if(item.id === action.payload.id){                       
                    item[action.payload.box] = action.payload.newValue;                    
                    return item
                }
                else return item
            })
        }   
        default:
            return state;
    }    
}

export {reducer}