
import axios from 'axios';
import * as types from './types';

export function signin({username,password}){
    console.log(username)
   return dispatch => {
        dispatch(signin_validating());
        axios({
            url:"/api/login",
            method:"post",
            data: { username,password}
        })
        .then(token=> dispatch(signin_success(token)))
        .catch(error=>dispatch(sigin_error(error)))

   }
}

function signin_validating(){
    return {
        type: types.LOGIN_VALIDATION,
    }
}

function signin_success(token){
    return {
        type: types.LOGIN_SUCCESS,
        token
    }
}

function sigin_error(error){
    return {
        type: types.LOGIN_ERROR,
        error
    }
}