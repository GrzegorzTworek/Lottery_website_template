import React from 'react';
import styles from './Chatsearch.module.scss';
import chatcursor from '../../assets/icons/chatcursor.svg';
import line from '../../assets/icons/line.svg';

const Chatsearch = () => (
  <div className={styles.chathead}>
    <input className={styles.input} placeholder="Enter your text here..." />
    {/* <text className={styles.global}>Global chat</text> */}
    <img className={styles.line} src={line} alt="line" />

    <img className={styles.chatcursor} src={chatcursor} alt="chatcursor" />
  </div>
);

export default Chatsearch;
