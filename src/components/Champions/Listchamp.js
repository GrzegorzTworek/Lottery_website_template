import React from 'react';
import styles from './Listchamp.module.scss';
import kolach from '../../assets/icons/kolach.svg';

const Listchamp = ({ children }) => (
  <div className={styles.first}>
    <text className={styles.number}>{children}</text>
    <div className={styles.rectangle4} />
    <text className={styles.user}>Other Player</text>

    <img className={styles.kolach} src={kolach} alt="kolo" />
    <text className={styles.price}>$ 12345</text>
    <text className={styles.percent}>25%</text>
  </div>
);

export default Listchamp;
