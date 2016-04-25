import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions.jsx'
import moment from 'moment'
import holidays from '../holidays.jsx'

moment.locale('hr')

const ucfirst = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

const isHoliday = (date) => {
    const year = date.format('YYYY')
    const key = date.format('YYYY-MM-DD')

    return key in holidays[year]
}

function daysInMonth(year, month) {
    const startDate = moment([year, month, 1])
    const endDate = moment(startDate).endOf('month')

    let dates = []
    let date = moment(startDate)
    while (date <= endDate) {
        dates.push(moment(date))
        date.add(1, 'day')
    }

    return dates
}

const dayOfWeek = (date) => date.format('dd')[0].toUpperCase()

const isWeekend = (date) => (date.weekday() >= 5)

const isWorkDay = (date) => (!isWeekend(date) && !isHoliday(date))

const cls = (date) => isWeekend(date) ? "weekend" :
                      isHoliday(date) ? "holiday" : "workday"

const workHours = (date) => isWorkDay(date) ? 8 : null

const holidayHours = (date) => isHoliday(date) && !isWeekend(date) ? 8 : null

const totalHours = (date) => !isWeekend(date) ? 8 : null

const ChartMonth = React.createClass({
    render: function() {
        const { year, month } = this.props
        const days = daysInMonth(year, month)

        const monthName = ucfirst(days[0].format('MMMM'))

        // Counts per row
        const workCounts = days.map((date) =>
            isWorkDay(date) ? 8 : null)

        const holidayCounts = days.map((date) =>
            isHoliday(date) && !isWeekend(date) ? 8 : null)

        const totalCounts = days.map((date) =>
            !isWeekend(date) ? 8 : null)

        // Totals per row
        const workTotal = workCounts.reduce((a, b) => a + b, 0)
        const holidayTotal = holidayCounts.reduce((a, b) => a + b, 0)
        const grandTotal = totalCounts.reduce((a, b) => a + b, 0)

        // Headers
        const headerTop = days.map((date, idx) =>
            <th className={cls(date)} key={idx}>{date.format('D')}</th>)

        const headerBottom = days.map((date, idx) =>
            <th className={cls(date)} key={idx}>{dayOfWeek(date)}</th>)

        // Counts
        const workCells = workCounts.map((hours, idx) =>
            <td className="TODO" key={idx}>{hours}</td>)

        const holidayCells = holidayCounts.map((hours, idx) =>
            <td className="TODO" key={idx}>{hours}</td>)

        const zeroCells = days.map((date, idx) =>
            <td className={cls(date)} key={idx}></td>)

        const totalCells = totalCounts.map((hours, idx) =>
            <td className="TODO" key={idx}>{hours}</td>)

        return <div>
            <h4>{monthName}</h4>
            <table className="chart-month hover">
                <thead>
                    <tr>
                        <td></td>
                        {headerTop}
                        <td rowSpan="2">Ukupno</td>
                    </tr>
                    <tr>
                        <td></td>
                        {headerBottom}
                    </tr>
                </thead>
                <tbody>
                    <tr><th>Redovni rad</th>{workCells}<td>{workTotal}</td></tr>
                    <tr><th>Prekovremeni</th>{zeroCells}<td>0</td></tr>
                    <tr><th>Godišnji</th>{zeroCells}<td>0</td></tr>
                    <tr><th>Praznik</th>{holidayCells}<td>{holidayTotal}</td></tr>
                    <tr><th>Bolovanje</th>{zeroCells}<td>0</td></tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>UKUPNO</th>
                        {totalCells}
                        <td>{grandTotal}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    }
})

let Chart = React.createClass({
    render: function () {
        if (!this.props.employee) {
            return <div>Select an employee pls.</div>
        }
        const year = this.props.year
        const months = [...Array(12).keys()]
        const rows = months.map((month, idx) => {
            return <ChartMonth key={idx} year={year} month={month} />
        })

        return (
            <div>
                <h3>Attendence for {this.props.employee.name} in {this.props.year}</h3>
                {rows}
            </div>
        )
    }
})


const stateToProps = (state) => {
    return state.chart
}

Chart = connect(stateToProps)(Chart)

export default Chart
