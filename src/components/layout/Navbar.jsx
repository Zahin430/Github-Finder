import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
    return (
        <nav className= 'navbar bg-primary'>
            <h1>
                <i className={icon} 
                    style = {{paddingRight: '5px'}}/>
                {title}
            </h1>
        </nav>
    )
}
// Default props will be overwritten if another prop is passed
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

// PropTypes for typechecking 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
