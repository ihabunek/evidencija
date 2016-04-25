import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectEmployee } from '../actions.jsx'

let Employee = React.createClass({
    propTypes: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    },
    handleClick: function() {
        this.props.handleClick({
            id: this.props.id,
            name: this.props.name,
        })
    },
    render: function () {
        return (
            <li className="employee">
                <a onClick={this.handleClick}>
                {this.props.name}
                </a>
            </li>
        )
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: props => {
            dispatch(selectEmployee(props))
        }
    }
}

Employee = connect(null, mapDispatchToProps)(Employee)

export default Employee
