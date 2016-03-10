import React from 'react';
import FriendList from '../FriendList';
import s from './Sidebar.scss';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="use-sidebar sidebar">
				<FriendList />
			</div>
        );
    }
}


export default Sidebar;
