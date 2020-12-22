import { ActionSheetIOS } from "react-native";
import { FACEBOOK_LOGIN_ERROR, FACEBOOK_LOGIN_SUCCESS } from "../actions/action-types";

const initialState = {
    token : undefined
}

export default function AutentificationReducer( state = initialState, action){
    switch(action.type) {
        case FACEBOOK_LOGIN_SUCCESS :
            return {
                token : action.payload
            };
        case FACEBOOK_LOGIN_ERROR : 
            return{
                token : undefined
            };
        default:
            return state;
    }
}