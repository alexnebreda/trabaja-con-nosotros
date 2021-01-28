import React from 'react';
import Header from './components/Header';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={`${styles.app}`}>
      <Header />
    </div>
  );
}

export default App;
