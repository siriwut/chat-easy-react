import EventEmitter from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ChatFormConstants from '../constants/ChatFormConstants.js';

const CHANGE_EVENT = 'change';

let state = {
    sentMessage: ''
};

function sendMessage(message) {
    console.log('sent message: ' + message);
    state.sentMessage = message;
}

class ChatFormStore extends EventEmitter {

    constructor() {
        super();
    }

    getState() {
        return state;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

let ChatFormStoreInstance = new ChatFormStore();

AppDispatcher.register(action => {
    switch (action.actionType) {
        case ChatFormConstants.CHATFORM_SEND_MESSAGE:
            sendMessage(action.message);
            break;
    }

    ChatFormStoreInstance.emitChange();
});


export default ChatFormStoreInstance;