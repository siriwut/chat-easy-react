import React, { Component, PropTypes } from 'react';
import Navbar from '../Navbar';
import s from './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
            	<Navbar />
            </div>
        );
    }
}

export default Header;
