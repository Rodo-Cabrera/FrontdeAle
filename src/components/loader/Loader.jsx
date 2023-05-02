import React from 'react'
import styles from './loader.module.css'
const Loader = () => {
  return (
    <div className='d-flex justify-content-center'>
      <h1 className={`my-5 ${styles.cargando}`}>CARGANDO!</h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader
