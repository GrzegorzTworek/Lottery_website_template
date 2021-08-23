import React from 'react';
import styles from './Champions.module.scss';
import vectorright from '../../assets/icons/vectorright.svg';
import koloch from '../../assets/icons/koloch.svg';
import Listchamp from './Listchamp';
import vector from '../../assets/icons/vector.svg';

const Champions = () => (
  <champions className={styles.wrapper}>
    <div className={styles.champhead}>
      <text className={styles.champ}>Champions</text>

      <text className={styles.last}>Last wins</text>
      <img className={styles.vector} src={vectorright} alt="right" />
    </div>

    <div className={styles.first}>
      <text className={styles.number}>123</text>
      <div className={styles.rectangle4} />
      <text className={styles.user}>Kubuś Puchatek</text>

      <img className={styles.koloch} src={koloch} alt="kolo" />
      <text className={styles.price}>$ 1</text>
      <text className={styles.percent}>25%</text>
    </div>
    <Listchamp>1</Listchamp>
    <Listchamp>2</Listchamp>
    <Listchamp>3</Listchamp>
    <Listchamp>4</Listchamp>
    <Listchamp>5</Listchamp>
    <Listchamp>6</Listchamp>
    <Listchamp>7</Listchamp>
    <Listchamp>8</Listchamp>
    <Listchamp>9</Listchamp>
    <Listchamp>10</Listchamp>
    <div className={styles.rectangle5}>
      <img className={styles.vector1} src={vector} alt="vector" />
    </div>
  </champions>
);

export default Champions;
