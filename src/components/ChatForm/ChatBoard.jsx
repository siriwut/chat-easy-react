import React, { Component, Protypes } from 'react';
import s from './ChatForm.scss';

class ChatBoard extends Component {
    render() {
        return (
            <div className="chatboard" >
            	<ul className="message-list" >
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
                    <li>Tape: Hello</li>
            	</ul>
			</div>
        );
    }
}

export default ChatBoard;
