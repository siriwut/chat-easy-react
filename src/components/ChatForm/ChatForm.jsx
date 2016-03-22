import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';
import ChatBoard from './ChatBoard.jsx';
import MessageBox from './MessageBox.jsx';
import ChatFormStore from '../../stores/ChatFormStore.js';



class ChatForm extends Component {

	constructor(props) {
		super(props);
		this.state = this._getStateFromStore();
	}

	componentWillMount() {
		ChatFormStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnMount() {
		ChatFormStore.removeChangeListener(this._onChange.bind(this));
	}
	
    render() {
        return (
            <div className="chatform"  >
				<ChatBoard />
				<MessageBox  />
			</div>
        );
    }

    _getStateFromStore() {
    	return ChatFormStore.getState();
    	
    }

    _onChange() {
    	this.setState(this._getStateFromStore());
    }
}

export default ChatForm;
