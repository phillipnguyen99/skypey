
import { SET_SENDING_MESSAGE } from '../constants/action-types';
import { getMessages } from '../fake-data';
import * as _ from 'lodash'
export default function messages(state=getMessages(10), action) {
    const { type, payload } = action;

    switch (type) {
        case SET_SENDING_MESSAGE:
            const { message, userId } = payload;
            const allMessages = state[userId];
            const number = Number(_.keys(allMessages).pop()) + 1;

            return {
                ...state,
                [userId]: {
                    ...allMessages,
                    [number]: {
                        number,
                        text: message,
                        is_user_message: true
                    }
                }
            };
        default:
            return state;
    }
}