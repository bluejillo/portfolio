import React from 'react';
import './section.scss';

const Section = (props) => {

    let style = 'section'

    if(props.sectionStyle){
        style  = `section-${props.sectionStyle}`
    }

    return (
        <div className={ style }>
            { props.children }
        </div>
    );
}

export default Section;