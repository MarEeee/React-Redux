import { CREATE_NEW_USER } from "./types";

export function createNewUser(item){
    return {
        type: CREATE_NEW_USER,
        payload: item
    }
}