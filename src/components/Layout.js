import React from 'react';
import styles from './Layout.module.css';
import Button from './Button';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.buttonContainer}>
        <Button />
      </div>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
};

export default Layout;