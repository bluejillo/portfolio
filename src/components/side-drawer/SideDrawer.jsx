import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

const SideDrawer = (props) => {
    
    let showHideClass = 'side-drawer';
    
    if(props.animation === true){
        showHideClass = 'side-drawer show';
    }

    return (
            <nav className={ showHideClass }>
                <div className="side-drawer__nav-links">
                    <ul>
                        <li>
                            <NavLink className="nav-items" 
                            activeClassName="active" 
                            exact to="/" 
                            onClick={ props.linkClick }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-items" 
                            activeClassName="active" 
                            to="/portfolio" 
                            onClick={ props.linkClick }>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-items" 
                            activeClassName="active" 
                            to="/contact" 
                            onClick={ props.linkClick }>Want to hire me?</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        
    );
    
}

export default SideDrawer;