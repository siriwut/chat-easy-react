import React, { Component, PropTypes } from 'react';
import s from './ChatForm.scss';
import ChatFormAction from '../../actions/ChatFormActions.js';

class MessageBox extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            message: ''
        };
    }

    _onChange(e) {
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
            <div className="message-box" >
            	<textarea className="message-text" value={this.state.message} onChange={this._onChange.bind(this)} ></textarea>
            	<button type="submit" className="btn-send-message" onClick={this._sendMessage.bind(this)}  >
            		<i className="fa fa-comment fa-1x" />
            	</button>
            </div>
        );
    }
}


export default MessageBox;