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
                 <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Image src={ aplogo } size='large'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            
        );
    }
}

export default Home;