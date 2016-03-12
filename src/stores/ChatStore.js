import AppDispatcher from '../dispatcher/AppDispatcher'
import EventEmitter from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

function sendMessage(message) {
    console.log('sent message');
}

class ChatStore extends EventEmitter {

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
    switch (action.actionType) {
        case ChatConstants.CHAT_SEND_MESSAGE:
            sendMessage(action.message);
            ChatStore.emitChange();
            break;
    }
});


export default ChatStore;
