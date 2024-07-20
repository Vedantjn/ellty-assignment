import React from 'react';
import styles from './Button.module.css';

const Button = () => {
  return (
    <>
      <button className={styles.button}>Done</button>
      <button className={styles.button}>Done</button>
      <button className={styles.button}>Done</button>
    </>
  );
};

export default Button;