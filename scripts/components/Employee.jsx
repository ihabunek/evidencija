import React from 'react'

export const Employee = React.createClass({
    render: function () {
        return (
            <li className="employee">
                {this.props.name}
            </li>
        )
    }
})
