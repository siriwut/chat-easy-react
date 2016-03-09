import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';
import ChatBoard from './ChatBoard.jsx';
import MessageTextBox from './MessageTextBox.jsx'


class ChatForm extends Component {
    render() {
        return (
            <form className="chat-form" >
				<ChatBoard />
				<MessageTextBox />
			</form>
        );
    }
}

export default ChatForm;
