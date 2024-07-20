import React from 'react';
import styles from './CheckboxList.module.css';

const CheckboxList = () => {
  const items = Array(9).fill('All pages');

  return (
    <div className={styles.checkboxList}>
      {items.map((item, index) => (
        <div key={index} className={styles.checkboxItem}>
          <input type="checkbox" id={`checkbox-${index}`} className={styles.checkbox} />
          <label htmlFor={`checkbox-${index}`} className={styles.label}>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;