import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import aplogo from './images/aplogo.svg';
import './styles/home.scss';

class Home extends Component {

    constructor () {

        super();
        this.state = {};

    }

    render () {
        return (
            <div className="home-main">
                 <Grid container>
                    <Grid.Row>
                        <Grid.Column width={6} textAlign='bottom'>
                            <h1 className='hero-text'>Hi, <br /> I'm Alyssa</h1>
                            <p className='hero-text-smaller'>Full Stack Web Developer</p>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image className='hero-logo' src={ aplogo } size='large'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            
        );
    }
}

export default Home;