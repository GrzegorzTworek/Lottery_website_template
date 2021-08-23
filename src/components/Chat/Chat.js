import React from 'react';
import styles from './Chat.module.scss';
import chaticon from '../../assets/icons/chaticon.svg';
import chatswitch from '../../assets/icons/chatswitch.svg';
import Chatlist from './Chatlist';
import Chatsearch from './Chatsearch';

const Chat = () => (
  <>
    <chat className={styles.wrapper}>
      <div className={styles.chathead}>
        <text className={styles.chat}>Chat</text>
        <img className={styles.chaticon} src={chaticon} alt="chaticon" />
        <text className={styles.number}>123</text>
        <text className={styles.global}>Global chat</text>
        <img className={styles.chatswitch} src={chatswitch} alt="chatswitch" />
      </div>
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatlist />
      <Chatsearch />
    </chat>
  </>
);

export default Chat;
