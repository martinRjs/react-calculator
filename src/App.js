import React from 'react';
import './App.scss';
import Keyboard from './components/Keyboard';
import useCalculartor from './hooks/Calculator';

const App = () => {

  const [calc, dispatch] = useCalculartor()

  return (
    <div className="app">
      <input type="text" value={calc.inputValue} readOnly />
      <Keyboard dispatch={dispatch} />
    </div>
  );
}

export default App;
