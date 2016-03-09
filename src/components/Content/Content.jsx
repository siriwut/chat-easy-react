import React from 'react';
import ChatForm from '../ChatForm';
import s from './Content.scss';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
            	<ChatForm />
			</div>
        );
    }
}

export default Content;
