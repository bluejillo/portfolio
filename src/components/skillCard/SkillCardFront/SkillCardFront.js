import React from 'react';
import { Card } from 'semantic-ui-react';
import DonutChart from 'react-d3-donut';
import './SkillCardFront.scss';

const SkillCardFront = (props) => {
	return (
		<Card className="skill-card-front">
			<div className="skill-card-front__header">
				<h3>{ props.skill }</h3>
			</div>
			<div className="skill-card-front__donut-container">
				<DonutChart 
				innerRadius={30}
	            outerRadius={40}
	            transition={true}
	            svgClass="skill-card-front__donut"
	            pieClass={props.pieID}
	            displayTooltip={false}
	            strokeWidth={0}
	            data={ props.donutData } />
			</div>
	        <button className="skill-card-front__button" onClick={props.flipClick}>Skill Info</button>
		</Card>
	);
}

export default SkillCardFront;