import { combineReducers} from 'redux';
import * as types from './types';

const inital_auth = {
    isAuth: false,
    validating: false,
}

function auth(state=inital_auth,actions){
    switch(actions.type){
        case types.LOGIN_VALIDATION:
            return {...state,validating:true}
        case types.LOGIN_SUCCESS:
        console.log('success')
            return {...state,validating:false,isAuth:true}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth
})
  
export default rootReducer;