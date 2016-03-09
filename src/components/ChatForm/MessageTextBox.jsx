import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';

class MessageTextBox extends Component {
    render() {
        return (
            <div className="message-box-group" >
            	<textarea className="message-box" />
            	<button type="submit" className="btn-send-message" >
            		<i className="fa fa-comment fa-2x" />
            	</button>
            </div>
        );
    }
}

export default MessageTextBox;
