import React, { Component, PropTypes } from 'react';
import s from './FriendList.scss';

export default class FriendList extends Component {
    render() {
        return (
            <ul className="friend-list" >
            	<li className="friend-list-header" >Online Friends</li>
				<li><i className="fa fa-circle online-status" ></i><span className="friend-name" >Tape</span></li>
				<li><i className="fa fa-circle online-status" ></i><span className="friend-name" >John</span></li>
				<li><i className="fa fa-circle online-status" ></i><span className="friend-name" >Jep</span></li>
			</ul>
        );
    };
}
