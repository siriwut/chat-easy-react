import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import s from './Navbar.scss';
import icon from 'font-awesome/scss/font-awesome.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" >
        		<div className="inner" >
        			<div className="navbar-header" >
                       <button className="sidebar-toggle" >
                        <i className="fa fa-bars fa-2x"></i>
                       </button>
                    </div>
        		</div>
        	</nav>
        );
    }
}

export default Navbar;
