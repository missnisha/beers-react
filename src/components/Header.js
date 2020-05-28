import React from 'react';
import Logo from './brewdog-logo.png';
import Bud from './bud.png';

const Header = () => {
    return (
        
            <div className="nav-bar">
                <img src={Logo} className="header-image"></img>
            </div>
    )
}
export default Header;