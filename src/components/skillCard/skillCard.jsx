import React from 'react';
import DonutChart from 'react-d3-donut';
import './skillCard.scss';

const SkillCard = (props) => {
    
        return(
            <div className="skill-card">
                <div className="skill-card__header-bar">
                    <h3>{ props.skill }</h3>
                </div>
                <div className="skill-card__donut-container">
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
                <div className="skill-card__footer-bar">
                    <button onClick={ () => props.descriptionClick(props.id)}>Skill info</button>
                        {props.descriptionToggle &&
                            <p>
                                { props.description }
                            </p>
                            
                        }
                </div>
            </div>
        );

}

export default SkillCard;