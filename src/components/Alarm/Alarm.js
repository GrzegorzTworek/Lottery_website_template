import React from 'react';
import styles from './Alarm.module.scss';
import dzwonek from '../../assets/icons/dzwonek.svg';

const Alarm = () => (
  <div className={styles.rectangle5}>
    <img className={styles.dzwonek} src={dzwonek} alt="dzwonek" />
  </div>
);

export default Alarm;
