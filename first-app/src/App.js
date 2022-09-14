import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    return setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
