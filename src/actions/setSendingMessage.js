import  { SET_SENDING_MESSAGE } from '../constants/action-types'

export const setSendingMessage = (message, userId) => {
    return {
        type: SET_SENDING_MESSAGE,
        payload: {
            message, userId
        }
    }
}
