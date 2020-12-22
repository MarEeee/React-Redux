import { CREATE_NEW_USER, DELETE_USER, USER_INFO} from "./types";


function createNewUser(item){
    return {
        type: CREATE_NEW_USER,
        payload: item
    }
}


function deleteUser(deleteElemId){
    return {
        type: DELETE_USER,
        payload: deleteElemId
    }
}

function userInfo(item){
    return {
        type: USER_INFO,
        payload: item
    }
}

export {createNewUser, deleteUser, userInfo}