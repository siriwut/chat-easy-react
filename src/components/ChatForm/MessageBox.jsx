import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';

class MessageBox extends Component {
    render() {
        return (
            <div className="message-box" >
            	<textarea className="message-text" />
            	<button type="submit" className="btn-send-message"  >
            		<i className="fa fa-comment fa-1x" />
            	</button>
            </div>
        );
    }
}

export default MessageBox;