import React from 'react'
import Chart from './Chart.jsx'
import Company from './Company.jsx'
import SaveButton from './SaveButton.jsx'

const App = React.createClass({
    render: function() {
        return (
            <div className="row column">
                <Company />
                <Chart />
            </div>
        )
    }
})

export default App
