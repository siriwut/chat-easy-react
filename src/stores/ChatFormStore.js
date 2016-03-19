import EventEmitter from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ChatFormConstants from '../constants/ChatFormConstants.js';

const CHANGE_EVENT = 'change';

function sendMessage(message) {
    console.log('sent message: ' + message);
}

class ChatFormStore extends EventEmitter {

    static emitChange() {
        this.emit(CHANGE_EVENT);
    }


    static addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }


    static removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

AppDispatcher.register((action) => {
    console.log('switch action');
    switch (action.actionType) {
        case ChatFormConstants.CHATFORM_SEND_MESSAGE:
            sendMessage(action.message);
            ChatStore.emitChange();
            break;
    }
});


export default ChatFormStore;