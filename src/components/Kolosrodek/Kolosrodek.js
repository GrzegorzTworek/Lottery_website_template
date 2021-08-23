import React from 'react';
import styles from './Kolosrodek.module.scss';
import kolosrodek from '../../assets/icons/kolosrodek.svg';
// import Alarm from '../Alarm/Alarm';

const Kolosrodek = () => (
  <>
    <img className={styles.wrapper} src={kolosrodek} alt="kolo" />
    {/* <Alarm /> */}
  </>
);
export default Kolosrodek;
