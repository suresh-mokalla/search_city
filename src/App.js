import React, { useState } from 'react';
import Data from './city.json';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <h3>Enter City Names :</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      {Data.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
      ).map((city) => {
        return (
          <div
            style={{
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
              maxwidth: '70%',
            }}
          >
            {city.name}
          </div>
        );
      })}
    </div>
  );
}
export default App;