import {CREATE_NEW_USER, DELETE_USER, USER_INFO, CHANGE_INFO} from "./types";

class newUser {
    constructor() {
        this.id = Date.now().toString() + Math.random().toString();
        this.FIO = "Не назначено";
        this.position = "Не назначено";
        this.birthDay = "год/месяц/день";
        this.sex = true;
        this.fired = false;

    }
}

export function createNewUser(){    
    return {
        type: CREATE_NEW_USER,
        payload: new newUser()
    }
}

export function deleteUser(deleteElem){ 
    return {
        type: DELETE_USER,
        payload: deleteElem
    }
}

export function userInfo(item = {}){
    return {
        type: USER_INFO,
        payload: item
    }
}

export function changeInfo(item) {
    return {
        type: CHANGE_INFO,
        payload: item
    }
}
