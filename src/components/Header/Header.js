import React from 'react';
import styles from './Header.module.scss';
import jackicon from '../../assets/icons/jackicon.svg';
import helpicon from '../../assets/icons/helpicon.svg';
import koloh from '../../assets/icons/koloh.svg';
import vector from '../../assets/icons/vector.svg';
import add from '../../assets/icons/add.svg';
import flaga from '../../assets/icons/flaga.svg';
import line from '../../assets/icons/line.svg';
import dzwonek from '../../assets/icons/dzwonek.svg';
import logout from '../../assets/icons/logout.svg';

const Header = () => (
  <header className={styles.wrapper}>
    <logo className={styles.logo}>Logo</logo>
    <img className={styles.jackicon} src={jackicon} alt="jackpot" />
    <jack className={styles.jack}>Jackpot</jack>
    <img className={styles.helpicon} src={helpicon} alt="help" />
    <help className={styles.help}>Help</help>
    <div className={styles.rectangle}>
      <img className={styles.koloh} src={koloh} alt="kolo" />
      <textt className={styles.textt}>1250</textt>
      <img className={styles.vector} src={vector} alt="vecto" />
    </div>
    <img className={styles.addicon} src={add} alt="add" />
    <add className={styles.add}>Add funds</add>
    <div className={styles.rectangle2}>
      <img className={styles.flaga} src={flaga} alt="flaga" />
      <img className={styles.vector2} src={vector} alt="vector" />
    </div>
    <img className={styles.line} src={line} alt="kolo" />
    <div className={styles.rectangle3}>
      <div className={styles.rectangle4} />
      <user className={styles.user}>Kubuś Puchatek</user>
      <acc className={styles.acc}>
        my account
        <img className={styles.vector3} src={vector} alt="vector" />
      </acc>
    </div>
    <div className={styles.rectangle5}>
      <img className={styles.dzwonek} src={dzwonek} alt="dzwonek" />
    </div>
    <img className={styles.line2} src={line} alt="kolo" />

    <div className={styles.rectangle6}>
      <img className={styles.dzwonek} src={logout} alt="logout" />
    </div>
  </header>
);

export default Header;
