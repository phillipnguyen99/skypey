import { SET_SENDING_MESSAGE, SET_TYPING_VALUE } from '../constants/action-types';

export default function typing(state="", action) {
    const { type, payload } = action;
    switch (type) {
        case SET_TYPING_VALUE:
            return payload;
        case SET_SENDING_MESSAGE:
            return ''
        default:
            return state;
    }
}