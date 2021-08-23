import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, secondary, tritary }) => {
  // const buttonClass = secondary ? styles.secondary : styles.button;

  let buttonClass;
  if (secondary) {
    buttonClass = styles.secondary;
  } else if (tritary) {
    buttonClass = styles.tritary;
  } else {
    buttonClass = styles.button;
  }

  // if ( buttonClass = secondary) {
  //    styles.secondary;
  // }
  // if (tritary) {
  //   buttonClass = styles.tritary;
  // } else {
  //   buttonClass = styles.button;
  // }

  // const buttonClass = tritary ? styles.tritary : styles.button;
  return (
    <button type="button" className={buttonClass}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   children: PropTypes.string.isRequaired,
// };

export default Button;
