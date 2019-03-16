import React from 'react';
import './Navigation.scss';

import SideDrawerToggleButton from '../side-drawer/SideDrawerToggleButton';


const Navigation = (props) => {

    return (
        <header className = "navigation">
            <nav className = "navigation__nav">
                <div className = "spacer" />
                <div className="hamburger-container">
                    <SideDrawerToggleButton click={ props.toggle }/>
                </div>
                {/* <div className = "nav-links">
                    <ul>
                        <li>
                            <NavLink className="nav-items" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-items" activeClassName="active" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-items" activeClassName="active" to="/contact">Want to hire me?</NavLink>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </header>
    );
}

export default Navigation;

