import React, { Component, PropTypes } from 'react';
import s from './FriendList.scss';

export default class FriendList extends Component {
    render() {
        return (
            <ul className="fa-ul friend-list" >
            	<li className="list-header" >Online Friends</li>
				<li><a href="#"><i className="fa fa-circle online-status" ></i>Tape</a></li>
				<li><a href="#"><i className="fa fa-circle online-status" ></i>John</a></li>
				<li><a href="#"><i className="fa fa-circle online-status" ></i>Jep</a></li>
			</ul>
        );
    };
}
