import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import AddEmployee from './AddEmployee.jsx'
import Employee from './Employee.jsx'

let EmployeeList = React.createClass({
    propTypes: {
        employees: PropTypes.array.isRequired,
    },
    render: function () {
        const nodes = this.props.employees.map(function (employee, index) {
            return <Employee key={index} {...employee} />
        })

        return (
            <div className="employee-list">
                <h3>Zaposlenici</h3>
                <ul>
                    {nodes}
                </ul>
                <AddEmployee />
            </div>
        )
    }
})

const stateToProps = (state) => {
    return {
        employees: state.employees
    }
}

EmployeeList = connect(stateToProps)(EmployeeList)

export default EmployeeList
