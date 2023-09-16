import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';

export default function Button(props) {
  const [isImportant, setIsImportant] = useState(props.importance === 'primary');

  useEffect(() => {
    setIsImportant(props.importance === 'primary');
  }, [props.importance]);

  if (isImportant) {
    return (
      <button
        onClick={props.onClick}
        className={`${styles.button} ${styles.primary}`}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        className={`${styles.button} ${styles.secondary}`}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    );
  }
}
