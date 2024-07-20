import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  const [pages, setPages] = useState([
    { id: 0, name: 'All pages', checked: false },
    { id: 1, name: 'Page 1', checked: false },
    { id: 2, name: 'Page 2', checked: false },
    { id: 3, name: 'Page 3', checked: false },
    { id: 4, name: 'Page 4', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    if (id === 0) {
      const allChecked = !pages[0].checked;
      setPages(pages.map(page => ({ ...page, checked: allChecked })));
    } else {
      setPages(pages.map(page =>
        page.id === id ? { ...page, checked: !page.checked } : page
      ));
      
      const allChecked = pages.slice(1).every(page => page.checked);
      setPages(prevPages => [
        { ...prevPages[0], checked: allChecked },
        ...prevPages.slice(1)
      ]);
    }
  };

  const handleDoneClick = () => {
    const selectedPages = pages.filter(page => page.checked && page.id !== 0).map(page => page.name);
    alert(`Selected pages: ${selectedPages.join(', ')}`);
  };

  return (
    <div className={styles.dropdown}>
      {pages.map((page) => (
        <React.Fragment key={page.id}>
          <div className={styles.dropdownItem} onClick={() => handleCheckboxChange(page.id)}>
            {page.name}
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={page.checked}
                onChange={() => {}}
              />
              <div className={styles.checkboxHover}></div>
            </div>
          </div>
          {page.id === 0 && <div className={styles.separator}></div>}
        </React.Fragment>
      ))}
      <div className={styles.separator}></div>
      <button className={styles.doneButton} onClick={handleDoneClick}>Done</button>
    </div>
  );
};

export default Dropdown;