import React from 'react';
import './SideDrawerToggleButton.scss';

const SideDrawerToggleButton = (props) => {
    return (
        <button className="toggle-burger" onClick={ props.click }>
            <div className="toggle-burger__line" />
            <div className="toggle-burger__line" />
            <div className="toggle-burger__line" />
        </button>
    );
}

export default SideDrawerToggleButton;