import { combineReducers } from 'redux'
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from './actions.jsx'

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

export default combineReducers({ company, employees })
