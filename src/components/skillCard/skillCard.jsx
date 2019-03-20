import React from 'react';
import DonutChart from 'react-d3-donut';
import './skillCard.scss';

const SkillCard = (props) => {
    
        return(
            <div className="skill-card">
                <h3>{ props.skill }</h3>
                <DonutChart 
                innerRadius={30}
                outerRadius={40}
                transition={true}
                svgClass="skill-card__donut"
                pieClass={props.pieID}
                displayTooltip={false}
                strokeWidth={0}
                data={ props.donutData } />
            </div>
        );

}

export default SkillCard;