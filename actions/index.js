import axios from 'axios';
import {API_KEY, FACEBOOK_APP_ID} from '../constant';
const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const FORECAST_WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
import {FACEBOOK_LOGIN_ERROR, FACEBOOK_LOGIN_SUCCESS, SET_CURRENT_WEATHER, SET_FORECAST_WEATHER} from '../actions/action-types';
//import * as Facebook from 'expo-facebook'
import {Facebook} from 'expo'; 
//import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const getCurrentWeatherByCity = city => async dispatch => {
    const response = await axios.get(`${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}`)
    dispatch({type : SET_CURRENT_WEATHER, payload: response.data})
};

export const getForecastWeatherByCity = city => async dispatch => {
    const response = await axios.get(`${FORECAST_WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}`)
    dispatch({type : SET_FORECAST_WEATHER, payload: response.data})
};

/* export const facebookLogin = (onSuccess, onError) => dispatch => {
    Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
        permissions : ["public_profil"]
    }).then(fbResponse => {
        if(fbResponse.type === "success"){
            //dispatcher success fbResponse.token
            setToken(fbResponse.token);
            AsyncStorage.setItem("fbToken", fbResponse.token)
            console.log(fbResponse);
            onSuccess && onSuccess();
        }else {
            //dispatcher une erreur
            dispatch({type: FACEBOOK_LOGIN_ERROR})
            onError && onError();
        }
    })
    .catch(error => {
        //dispatcher erreur
        dispatch({type: FACEBOOK_LOGIN_ERROR})
        onError && onError();
    })
}

export const setToken = (token) => dispatch => {
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
} */