import React from 'react'
import styles from './loader.module.scss'

const loader = () => {
  return (
    <div className={styles.loader__wrap} role="alertdialog" aria-busy="true" aria-live="polite" aria-label="Loading…">
	    <div className={styles.loader} aria-hidden="true">
		    <div className={styles.loader__sq}></div>
		    <div className={styles.loader__sq}></div>
	    </div>
    </div>
  )
}

export default loader