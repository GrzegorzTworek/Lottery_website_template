import React from 'react';
import styles from './Bet.module.scss';
import kolob from '../../assets/icons/koloh.svg';
import kolab from '../../assets/icons/kolab.svg';
import vectorup from '../../assets/icons/vectorup.svg';
import vector from '../../assets/icons/vector.svg';
import Button from '../atoms/Button/Button';

const Bet = () => (
  <bet className={styles.wrapper}>
    <div className={styles.rectangle2}>
      <img className={styles.kolob} src={kolob} alt="kolo" />
      <img className={styles.vector2} src={vector} alt="vector" />
    </div>

    <div className={styles.rectangle3}>
      <input className={styles.input} placeholder="1250" />
    </div>
    <Button secondary>Add to bet</Button>
    <div className={styles.rectangle}>
      <img className={styles.kolab} src={kolab} alt="kolo" />
      <textt className={styles.textt}>$ 125000</textt>
      <img className={styles.vectorup} src={vectorup} alt="vecto" />
    </div>
    <Button tritary>Place bet</Button>
  </bet>
);

export default Bet;
