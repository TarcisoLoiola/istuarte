import React, { Component } from 'react'
import Moment from 'moment'

class Calendar extends Component {
    constructor(props){
        super(props)
        this.state = {
            month: Moment()
        }
    }


    handleDatePicker(e){
        console.log(e)
    }

    handleMonth(e){
        let currentMonth = Moment()
        let thisStateMonth = this.state.month

        let newState = this.state.month
        newState = e < 0 && currentMonth < thisStateMonth ? Moment(newState).subtract(1, 'months') : e > 0 ? Moment(newState).add(1, 'months') : Moment(newState)
        this.setState({month: newState})
    }

    render() {
        let dayArray = []

        const arrowLeft = '<'
        const arrowRight = '>'
        
        let today = Moment().format('DD')
        let daysInMonth =  this.state.month.daysInMonth()

        let currentWeekDay = Moment().format('ddd').toLowerCase()
        
        






        for( let i = 1; i <= daysInMonth; i +=1 ) {
            // if(emptyWeekDay > 0 ){
            //     for (let j = 0; j < emptyWeekDay; j += 1) {
            //         dayArray.push(<div key={`emptyWeekDay${j}`}></div>)
            //     }
            //     emptyWeekDay = 0
            // }
            // if(i < today) dayArray.push(<div key={`dayArray${i}`} className='weekdays weekdays-disable'>{i}</div>)
            // else dayArray.push(<div key={`dayArray${i}`} className='weekdays' onClick={e => this.handleDatePicker(i)}>{i}</div>)
        }




        return (
            <div className='ia-calendar-wrapper'>
                <div>
                    <div className='container' >
                        <div className='weekdays' onClick={() => this.handleMonth( -1 )}> {arrowLeft} </div>
                        <h2 className='monthYear' >{this.state.month.format('MMMM, YYYY')}</h2>
                        <div className='weekdays' onClick={() => this.handleMonth( +1 )}> {arrowRight} </div>

                        <div className='weekdayHeader'>SUN</div>
                        <div className='weekdayHeader'>MON</div>
                        <div className='weekdayHeader'>TUE</div>
                        <div className='weekdayHeader'>WED</div>
                        <div className='weekdayHeader'>THU</div>
                        <div className='weekdayHeader'>FRI</div>
                        <div className='weekdayHeader'>SAT</div>

                        {
                            dayArray && 
                            dayArray.map( day =>
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