import AppDispatcher from '../dispatcher/AppDispatcher';
import ChatConstants from '../constants/ChatConstants';

export default class ChatActions {
    sendMessage(message) {
        AppDispatcher.dispatch({
            actionType: ChatConstants.CHAT_SEND_MESSAGE,
            message
        });
    }
}
