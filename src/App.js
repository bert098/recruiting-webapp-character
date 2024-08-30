import { useState } from 'react';
import './App.css';
import CharacterSheet from './components/characterSheet';


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
    <CharacterSheet />
  </div>
  );
}

export default App;
