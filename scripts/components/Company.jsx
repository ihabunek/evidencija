import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { EmployeeList } from './EmployeeList.jsx'

let Company = React.createClass({
    propTypes: {
        company: PropTypes.object.isRequired,
        employees: PropTypes.array.isRequired,
    },
    render: function () {
        return (
            <div className="company">
                <fieldset>
                    <h3>Podaci o firmi</h3>
                    <input name="name" type="text" placeholder="Naziv" defaultValue={this.props.company.name}/>
                    <input name="address" type="text" placeholder="Adresa" defaultValue={this.props.company.address}/>
                    <input name="oib" type="text" placeholder="OIB" defaultValue={this.props.company.oib} />
                </fieldset>

                <EmployeeList employees={this.props.employees} />
            </div>
        )
    }
})

const stateToProps = (state) => {
    return {
        company: state.company,
        employees: state.employees,
    }
}

Company = connect(stateToProps)(Company)

export default Company
