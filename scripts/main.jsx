import React from 'react'
import { render } from 'react-dom'
import reducer from './reducers.jsx'
import { createStore } from 'redux'
import App from './components/App.jsx'
import { Provider } from 'react-redux'

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
)
