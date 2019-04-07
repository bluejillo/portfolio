import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import SkillCardFront from './SkillCardFront/SkillCardFront';
import SkillCardBack from './SkillCardBack/SkillCardBack';
import './SkillCard.scss';

class SkillCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped : false
        };
    }
    

    handleFlip = (e) => {
        e.preventDefault();
        this.setState(prevState => ({flipped: !prevState.flipped}));
    }

    render() {
        return(
            <div className="skill-card">
                <ReactCardFlip isFlipped={this.state.flipped}>
                    <div key="front">
                        <SkillCardFront
                            flipClick={this.handleFlip}
                            pieID={this.props.pieID}
                            donutData={this.props.donutData}
                            skill={ this.props.skill }/>
                    </div>
                    <div key="back">
                        <SkillCardBack 
                        description={this.props.description}
                        skill={this.props.skill}
                        flipClick={this.handleFlip}/>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }
}

export default SkillCard;