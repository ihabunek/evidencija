import React from 'react'
import { connect } from 'react-redux'
import Company from './Company.jsx'

export const App = React.createClass({
    render: function() {
        return (
            <Company {...this.props} />
        )
    }
})