import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import aplogo from './images/aplogo.svg';
import './styles/home.scss';
import  SkillCard  from './components/skillCard/skillCard';

class Home extends Component {

    state = {
        skills: [
            {
                skillTitle: 'React',
                donutData: [ {count: 220, color: '#A1A1A1'}, {count: 140, color: '#8860D0'}]
            },
            {
                skillTitle: 'HTML 5',
                donutData: [{count: 140, color: '#A1A1A1'}, {count: 220, color: '#8860D0'}]
            }
        ]
    }

    render () {
        let skillCards = null;
        if(this.state.skills){
               skillCards = this.state.skills.map((skill, index) => 
                    <Card>
                        <SkillCard key={ index } 
                        skill={ skill.skillTitle }
                        donutData={ skill.donutData }
                        pieID={ `pie${index}` }
                        />
                    </Card>
                    
                )
        }
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
                <Grid >
                    <Grid.Row>
                        <Grid.Column width={12}>
                           
                           <Card.Group>
                                { skillCards }
                           </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            
        );
    }
}

export default Home;