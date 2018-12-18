import React, { Component } from 'react';
import Select from 'react-select'
// import { Link } from 'react-router-dom';

class Team extends Component {
    state = {
        team_member: '',
    }

    render() {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]

        return (
            <div className='ia-team'>
                Pick a Member
                <Select options={options} />
            </div>
        )
    }
}

export default Team;