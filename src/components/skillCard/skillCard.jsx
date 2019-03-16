import React from 'react';
import DonutChart from 'react-d3-donut';

const SkillCard = (props) => {
    const data = [{
        count: 220,
        color: '#801515'
    }, 
    {
        count: 140,
        color: '#000'
    }]
        return(
            <div>
                <DonutChart 
                innerRadius={30}
                outerRadius={40}
                transition={true}
                svgClass="example1"
                pieClass="pie1"
                displayTooltip={true}
                strokeWidth={2}
                data={data} />
            </div>
        );

}

export default SkillCard;