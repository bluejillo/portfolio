import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import aplogo from './images/aplogo.svg';
import './styles/home.scss';
import  SkillCard  from './components/skillCard/skillCard';
import Section from './components/section/section';

class Home extends Component {

    state = {
        skills: [
            {
                id: 0,
                skillTitle: 'React',
                donutData: [ {count: 220, color: '#DFDFDF'}, {count: 140, color: '#3CDB46'}],
                showDescription: false,
                skillDescription: "I know some React."
            },
            {
                id: 1,
                skillTitle: 'HTML5',
                donutData: [{count: 140, color: '#DFDFDF'}, {count: 220, color: '#3CDB46'}],
                showDescription: false,
                skillDescription: 'Im real good at HTML'
            },
        ]
    }

    handleSkillDescriptionClick = (event, id) => {
        console.log(id)
        const skillIndex = this.state.skills.findIndex(s => {
            return s.id === id
        })
        const skill = {
            ...this.state.skills[skillIndex]
        }
        skill.showDescription = !skill.showDescription
        const skills = [ ...this.state.skills]
        skills[skillIndex] = skill

        this.setState({skills: skills})

        
    }

    render () {
        let skillCards = null;
        if(this.state.skills){
               skillCards = this.state.skills.map((skill, index) => 
                    <Card>
                        <SkillCard key={ `skill-${index}` } 
                        id={ skill.id }
                        skill={ skill.skillTitle }
                        donutData={ skill.donutData }
                        pieID={ `pie${index}` }
                        description={skill.skillDescription}
                        descriptionToggle={skill.showDescription}
                        descriptionClick={this.handleSkillDescriptionClick.bind(this, skill.id)}
                        />
                    </Card>
                    
                )
        }
        return (
            <div className="home-main">
                <Section sectionStyle='hero'>
                    <Grid container>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <h1 className='hero-text'>Hi, <br /> I'm Alyssa</h1>
                                <p className='hero-text-smaller'>Full Stack Web Developer</p>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Image className='hero-logo' src={ aplogo } size='large'/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Section>
                <Section>
                    <Grid >
                        <Grid.Row>
                            <Grid.Column>
                                <Card.Group centered>
                                        { skillCards }
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Section>
                 
                
            </div>
            
        );
    }
}

export default Home;