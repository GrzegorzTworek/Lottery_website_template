import React from 'react';
import Header from './components/Header/Header';
import Champions from './components/Champions/Champions';
import Chat from './components/Chat/Chat';
import Kolosrodek from './components/Kolosrodek/Kolosrodek';

import Bet from './components/Bet/Bet';
import Buttons from './components/Buttons/Buttons';
import Alarm from './components/Alarm/Alarm';
import styles from './App.module.scss';

const App = () => (
  <>
    {/* // class App extends React.Component{ */}
    {/* <>
  return( */}

    <div className={styles.appbody}>
      <Header />
    </div>
    <Champions />

    <Kolosrodek />
    <Chat />

    <Buttons />
    <Bet />
    <Alarm />
  </>
);

export default App;
