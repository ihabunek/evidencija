import { combineReducers } from 'redux'
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, SELECT_EMPLOYEE } from './actions.jsx'
import { moment } from 'moment'

const initialCompany = {
    name: "Big Fish Software",
    address: "Savska cesta 13",
    oib: "12345678901",
}

const initialEmployees = [{
    name: "Ivan Habunek",
}, {
    name: "Ivana Kvakić",
}]


function company(state = initialCompany, action) {
    return state
}

function employees(state = initialEmployees, action) {
    if (action.type === ADD_EMPLOYEE) {
        return state.concat([
            { name: action.name }
        ])
    }

    if (action.type === REMOVE_EMPLOYEE) {
        return state.filter((el, idx) => idx !== action.index)
    }

    return state
}

function chart(state = { year: 2015 }, action) {
    if (action.type === SELECT_EMPLOYEE) {
        return Object.assign({}, state, { employee: action.employee })
    }

    return state
}


export default combineReducers({ company, employees, chart })
