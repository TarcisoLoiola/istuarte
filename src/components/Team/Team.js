import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Team extends Component{
    constructor( props ) {
        super( props );
        this.state={
            isTeamMember: false,
            team_member: '',
        }
    }

    agenda = (name) => {
        const newState = this.state;
        newState.team_member = name;
        newState.isTeamMember = true;
        this.setState( newState );
    }
    
    render(){
        return(
            <div className='ia-team'>
                <div className='ia-team-container-grid'>
                    <div className='ia-team-container-card' onClick={() => { this.agenda('America')}}>
                        <img src='https://pbs.twimg.com/profile_images/938813312506064896/ciY68hiP_400x400.jpg' alt='team member'/>
                        <h3>America</h3>
                        <p>See my agenda for details</p>
                    </div>
                    <div className='ia-team-container-card' onClick={(e) => { this.agenda('Black Widow') }}>
                        <img src='http://i1.bangqu.com/bg/news/20180209/201802020313335774.jpg' alt='team member'/>
                        <h3>Widow</h3>
                        <p>See my agenda for details</p>
                    </div>
                    <div className='ia-team-container-card' onClick={() => { this.agenda('Tony Start') }}>
                        <img src='data:image/jpeg;base64,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' alt='team member'/>
                        <h3>Stark</h3>
                        <p>See my agenda for details</p>
                    </div>
                    <div className='ia-team-container-card' onClick={() => { this.agenda('Bruce Banner') }}>
                        <img src='https://media1.popsugar-assets.com/files/thumbor/hcgnOSifwbc5Y4vB8hFA8c_Ob8E/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/05/01/811/n/1922283/238890d5f4263f9f_Avengers-Age-Ultron-Pictures-3/i/Out-Bruce-Banner-Hulk.jpg' alt='team member'/>
                        <h3>Banner</h3>
                        <p>See my agenda for details</p>
                    </div>
                    <div className='ia-team-container-card' onClick={() => { this.agenda('Peter Parker') }}>
                        <img src='https://vignette.wikia.nocookie.net/marvelmovies/images/b/bc/Peter_Parker_AG_thumb.jpg/revision/latest?cb=20120705122015' alt='team member'/>
                        <h3>Peter</h3>
                        <p>See my agenda for details</p>
                    </div>
                    {
                        this.state.isTeamMember &&
                        <div className='ia-team-container-body'>
                            <p>This is <strong>{ this.state.team_member }</strong> agenda!</p>
                            <p>Here we are going to have displayed the agenda <strong>{ this.state.team_member }</strong> a week ahead of today.</p>

                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Team;