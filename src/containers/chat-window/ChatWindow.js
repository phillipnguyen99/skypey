import React, {useMemo} from 'react'
import store from '../../store'
import {Header} from '../../components/header/Header'
import {Chats} from '../../components/Chats/Chats'
import {MessageInput} from '../message-input/MessageInput'
import * as _ from 'lodash'
import './ChatWindow.css'

const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const messages = useMemo(() => _.values(activeMsgs), [activeMsgs])
    const { typing } = state;
    
    return (
        <div className="ChatWindow">
            <Header activeUser={activeUser} />
            <Chats messages={messages} />
            <MessageInput value={typing} />
        </div>
    )
}

export default ChatWindow
