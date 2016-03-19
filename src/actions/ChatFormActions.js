import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ChatFormConstants from '../constants/ChatFormConstants.js';

export default class ChatFormActions {
    static sendMessage(message) {
        AppDispatcher.dispatch({
            actionType: ChatFormConstants.CHATFORM_SEND_MESSAGE,
            message: message
        });
    }
}
