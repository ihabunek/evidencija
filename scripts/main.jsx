const React  = require('react')
const ReactDOM  = require('react-dom')

import {createStore} from 'redux'
import {App} from './components.jsx'
import reducer from './reducers.jsx'
import {addEmployee, removeEmployee} from './actions.jsx'


let store = createStore(reducer)
console.log(store.getState())

store.dispatch(addEmployee('Foo Bar'))

console.log(store.getState())

store.dispatch(removeEmployee(1))

console.log(store.getState())

// ReactDOM.render(
//     <App />,
//     document.getElementById('content')
// );
