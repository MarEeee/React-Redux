import { CREATE_NEW_USER, DELETE_USER, USER_INFO, CHANGE_INFO} from "./types";


export function createNewUser(item){
    return {
        type: CREATE_NEW_USER,
        payload: item
    }
}


export function deleteUser(deleteElem){ 
    return {
        type: DELETE_USER,
        payload: deleteElem
    }
}

export function userInfo(item){
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



