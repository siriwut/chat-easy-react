import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Footer from '../Footer';
import s from './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <div className="wrapper" >
            	   <Header />
                   <Content />
                </div>
                   <Sidebar />
            </div>

        );

    }
}

export default App;
