export const App = React.createClass({
    render: function() {
        return (
            <Company {...this.props.company} />
        );
    }
});

export const Company = React.createClass({
    proptypes: {
        name: React.PropTypes.string.required,
        address: React.PropTypes.string.required,
        oib: React.PropTypes.string.required,
        employees: React.PropTypes.array.required
    },
    render: function () {
        return (
            <div className="company">
                <fieldset>
                    <legend>Podaci o firmi</legend>
                    <input name="name" type="text" placeholder="Naziv" defaultValue={this.props.name}/>
                    <input name="address" type="text" placeholder="Adresa" defaultValue={this.props.address}/>
                    <input name="oib" type="text" placeholder="OIB" defaultValue={this.props.oib} />
                </fieldset>

                <EmployeeList employees={this.props.employees} />
            </div>
        );
    }
});

export const EmployeeList = React.createClass({
    render: function () {
        const nodes = this.props.employees.map(function (employee, index) {
            return <Employee key={index} {...employee} />;
        });

        return (
            <div className="employee-list">
                <p>Zaposleni:</p>
                {nodes}
                <button className="button small">Add employee</button>
            </div>
        );
    }
});

export const Employee = React.createClass({
    render: function () {
        return (
            <div className="employee">
                {this.props.name}
            </div>
        );
    }
});
