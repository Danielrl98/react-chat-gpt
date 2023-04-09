import { combineReducers, createStore } from "redux";

/*const questionReducer = (state = { question: []},action) =>{

    if(action.type === 'enviar-resposta'){
        return { ...state, question:[...state, action.payload] }
    }
    return state
}*/
const responseReducer = (state = { response: []},action) =>{

    if(action.type === 'obter-resposta'){
        return { ...state, response:[...state.response, action.payload] }
    }
    return state
}

const rootReducer = combineReducers({responseReducer})

const store = createStore (rootReducer)

export default store