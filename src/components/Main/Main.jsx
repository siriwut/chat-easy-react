import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import s from './Main.scss';


export default class Main extends Component {

    render() {
        return (
            <div className="wrapper">
        		<Header/>
        		<Sidebar />
        		<Content />
        	</div>
        );
    }
}
