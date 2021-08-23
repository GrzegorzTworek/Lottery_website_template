import React from 'react';
import styles from './Buttons.module.scss';
// import Button from './components/atoms/Button/Button'
import Button from '../atoms/Button/Button';

const Buttons = () => (
  <div className={styles.wrapper}>
    <Button>Weekly</Button>
    <Button>Monthly</Button>
    <Button>Quarterly</Button>
    <Button>Annual</Button>
  </div>
);

export default Buttons;
