import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';
import ChatBoard from './ChatBoard.jsx';
import MessageBox from './MessageBox.jsx';
import ChatFormAction from '../../actions/ChatFormActions.js';



class ChatForm extends Component {

	constructor(props) {
		super(props);	
		this.state = {
			message: ''
		};
	}

	_handleMessageChange(e) {
		this.setState({
			message: e.target.value
		});
	}

	_sendMessage(e) {

		ChatFormAction.sendMessage(this.state.message);
		e.preventDefault();
	}

    render() {
        return (
            <form className="chatform" onSubmit={this._sendMessage.bind(this)} >
				<ChatBoard />
				<MessageBox message={this.state.message} handleMessageChange={this._handleMessageChange.bind(this)} />
			</form>
        );
    }
}

export default ChatForm;
