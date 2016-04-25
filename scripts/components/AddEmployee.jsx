import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions.jsx'

let AddEmployee = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="medium-6 columns">
                    <div className="input-group">
                        <input type="text" className="input-group-field" ref="input" />
                        <div className="input-group-button">
                            <input type="button" className="button" value="Add Employee"
                                   onClick={ () => {this.props.handleClick(this.refs.input)} } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (input) => {
            if (input.value) {
                dispatch(addEmployee(input.value))
                input.value = ""
            }
        }
    }
}

AddEmployee = connect(null, mapDispatchToProps)(AddEmployee)

export default AddEmployee
