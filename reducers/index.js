import { combineReducers } from "redux";
//import AutentificationReducer from "./authentification";
import WeatherReducer from './weather'

const rootReducer = combineReducers({
    weather: WeatherReducer,
    //authentification : AutentificationReducer
});

export default rootReducer;