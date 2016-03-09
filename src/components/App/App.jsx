import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Footer from '../Footer';
import s from './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app" >
                <Header />
                <Sidebar />
                <Content />
            </div>
        );

    }
}

export default App;
