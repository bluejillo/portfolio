import React from 'react';
import { Card } from 'semantic-ui-react';
import './SkillCardBack.scss';

const SkillCardBack = (props) => {
	return (
		<Card className="skill-card-back">
			<div className="skill-card-back__header">
				<h3>{ props.skill }</h3>
			</div>
			<div className="skill-card-back__description-container">
				<p> {props.description} </p>
			</div>
	        <button className="skill-card-back__button" onClick={props.flipClick}>
	        	<i class="material-icons md-24">
					arrow_back
				</i>
	        </button>
		</Card>
	);
}

export default SkillCardBack;