import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component{
    
    render(){
        return(
            <div className="ia-about-us">
                <div className='ia-about-us-container-grid'>
                    <p className="ia-about-us-container-text">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Inventore amet consectetur corporis repellendus dolores nostrum 
                    labore laboriosam quam id illum saepe doloribus corrupti perspiciatis commodi, 
                    nihil culpa non, assumenda provident!</p>
                    <p className="ia-about-us-container-text">Eaque tempore aperiam optio repellendus 
                    iusto ducimus neque atque, magni architecto necessitatibus est placeat velit ullam 
                    voluptatum ipsum hic exercitationem error minima! Et non rerum maiores est unde ab quo?</p>
                    <p className="ia-about-us-container-text">Ab numquam, consequuntur porro aperiam 
                    inventore expedita cumque commodi, amet dolores voluptatibus eaque perferendis, 
                    unde quia architecto aliquam esse eum quaerat eligendi nemo! Vel, perspiciatis 
                    adipisci sapiente modi neque aliquam.</p>
                    <p className="ia-about-us-container-address">Rua Miguel Angelo 14, Cidade Nobre, Ipating - 35162</p>
                    
                    <a href='tel:(31)3826-3204' className="ia-about-us-container-phone">Phone:(31)3826-3204</a>
                    <Link to='/about-us/contact-us'>Contact Us</Link>
                </div>
            </div>
        )
    }
}

export default AboutUs;