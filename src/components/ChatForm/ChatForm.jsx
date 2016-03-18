import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';
import ChatBoard from './ChatBoard.jsx';
import MessageBox from './MessageBox.jsx'


class ChatForm extends Component {
    render() {
        return (
            <form className="chatform" >
				<ChatBoard />
				<MessageBox />
			</form>
        );
    }
}

export default ChatForm;
