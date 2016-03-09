import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import s from './Navbar.scss';
import icon from 'font-awesome/scss/font-awesome.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" >
        		<div className="navbar-in" >
        			<div className="box -left">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
        			<div className="box -right">Name</div>
        		</div>
        	</nav>
        );
    }
}

export default Navbar;
