import React from 'react';
import styles from './Chatlist.module.scss';
// import kolach from '../../assets/icons/kolach.svg';

const Chatlist = () => (
  <div className={styles.first}>
    {/* <text className={styles.number}>{children}</text> */}
    <div className={styles.rectangle4} />
    <div className={styles.rectangle3}>
      <text className={styles.user}>Kubuś Puchatek</text>

      <text className={styles.decscription}>Lorem ipsum dolor sit amet, consectetur</text>
    </div>
  </div>
);

export default Chatlist;
