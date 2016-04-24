import React from 'react'
import AddEmployee from './AddEmployee.jsx'
import { Employee } from './Employee.jsx'

export const EmployeeList = React.createClass({
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
