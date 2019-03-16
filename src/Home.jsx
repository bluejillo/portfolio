import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
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
                            <p>This is a test column</p>
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <p>This is a test column</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            
        );
    }
}

export default Home;