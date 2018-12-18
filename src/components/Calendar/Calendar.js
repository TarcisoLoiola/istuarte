import React, { Component } from 'react'
import Moment from 'moment'
// import DatePickerStore from '../../store/DatePicker';

class Calendar extends Component {
    // constructor(props){
    //     super(props)
    state = {
        month: Moment(),
        active: Moment().format('YYYY-MM-DD'),
        disabledDays: {
            sun: true,
            mon: true,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            daysOff: [
                    '2019-01-02',
                    '2018-12-19'
            ],
            hollidays: [
                '2019-01-01',
            ]
        }
    }

    activeColor(identifier){
        if (this.state.active === identifier) {
            return 'rgba(2, 145, 255, 0.769)';
        }
        if(Moment().format('YYYY-MM-DD') === identifier){
            return 'rgba(180, 221, 252, 0.77)';
        }
          return ''
    }
    
    handleActiveColor(identifier){
        // console.log(identifier)
        if (this.state.active === identifier) {
            this.setState({active : null})
          } else {
            this.setState({active : identifier})
          }
    }

    firstDayMonthStartingPoint = (weekday) => {
        const weekdayObj = {
            sat: 6,
            fri: 5,
            thu: 4,
            wed: 3,
            tue: 2,
            mon: 1,
            sun: 0
        }
        return weekdayObj[weekday]
    }

    handleMonth(date) {
        let currentMonth = Moment()
        let thisStateMonth = this.state.month

        let newState = this.state.month
        newState = date < 0 && currentMonth < thisStateMonth ? Moment(newState).subtract(1, 'months') : date > 0 ? Moment(newState).add(1, 'months') : Moment(newState)
        this.setState({ month: newState })
    }

    calendarStartVariables() {
        const calendar = {
            today: Moment(),
            month: this.state.month,
            daysInMonth: this.state.month.daysInMonth(),
            firstDay: Moment(`${this.state.month.format('YYYY')}-${this.state.month.format('MM')}-01`),
        }
        return calendar
    }

    MonthArray(today, month, daysInMonth, firstDayMonthStartingPoint) {
        let monthArray = []

        for (let i = 1; i <= daysInMonth; i += 1) {

            let loopedDate = Moment(`${month.format('YYYY')}-${month.format('MM')}-${i < 10 ? `0${i}` : i}`)
            let weekday = Moment(`${month.format('YYYY')}-${month.format('MM')}-${i < 10 ? `0${i}` : i}`).format('ddd').toLowerCase()
            
            let conditionalLoopedDate = loopedDate.format('YYYY-MM-DD')
            let newToday = today.format('YYYY-MM-DD')
            
            let isValidWeekDay = this.state.disabledDays[weekday]

            let daysOff = this.state.disabledDays.daysOff
            let holliday = this.state.disabledDays.hollidays
            // console.log(this.state.disabledDays.daysOff[1])
            if (firstDayMonthStartingPoint > 0) {//insert empty values in array to start the first day of the month
                for (let j = 0; j < firstDayMonthStartingPoint; j += 1) {
                    monthArray.push(<div key={`firstDayMonthStartingPoint${j}`}></div>)
                }
                firstDayMonthStartingPoint = 0
            }
            if(isValidWeekDay || conditionalLoopedDate < newToday || daysOff.includes(conditionalLoopedDate) || holliday.includes(conditionalLoopedDate)) {//passing weekday to disable nonwork weekdays
                // console.log(conditionalLoopedDate)
                monthArray.push(
                    <div 
                        key={`monthArray${i}`}
                        className='weekdays disabled-days'>
                        {i}
                    </div>
                )
            }
            else {
                let identifier = `${loopedDate.format('YYYY-MM-DD')}`
                monthArray.push(
                    <div 
                        key={`monthArray${i}`}
                        style={{background: this.activeColor(`${loopedDate.format('YYYY-MM-DD')}`)}}
                        className={`weekdays weekdays-hover`}
                        onClick={date => {
                        this.props.onClick(Moment(`${month.format('YYYY')}-${month.format('MM')}-${i < 10 ? `0${i}` : i}`))
                        this.handleActiveColor(identifier)}}>
                        {i}
                    </div>
                )
            }
        }
        return monthArray
    }

    render() {
        const { today, month, daysInMonth, firstDay } = this.calendarStartVariables()
        let firstDayWeekDay = firstDay.format('ddd').toLowerCase()
        let firstDayMonthStartingPoint = this.firstDayMonthStartingPoint(firstDayWeekDay)

        let monthArray = this.MonthArray(today, month, daysInMonth, firstDayMonthStartingPoint)

        
        return (
            <div className='ia-calendar-wrapper'>
                <div>
                    <div className='container' >
                        <div className='weekdays arrow' onClick={() => this.handleMonth(-1)}> {'<'} </div>
                        <h2 className='monthYear' >{this.state.month.format('MMMM, YYYY')}</h2>
                        <div className='weekdays arrow' onClick={() => this.handleMonth(+1)}> {'>'} </div>

                        <div className='weekdayHeader'>SUN</div>
                        <div className='weekdayHeader'>MON</div>
                        <div className='weekdayHeader'>TUE</div>
                        <div className='weekdayHeader'>WED</div>
                        <div className='weekdayHeader'>THU</div>
                        <div className='weekdayHeader'>FRI</div>
                        <div className='weekdayHeader'>SAT</div>

                        {
                            monthArray &&
                            monthArray.map(day =>
                                day
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Calendar