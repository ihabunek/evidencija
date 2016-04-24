import React, { PropTypes } from 'react'

const Employee = React.createClass({
    propTypes: {
        name: PropTypes.string.isRequired,
    },
    render: function () {
        return (
            <li className="employee">
                {this.props.name}
            </li>
        )
    }
})

export default Employee
