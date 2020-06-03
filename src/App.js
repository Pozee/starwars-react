import React from 'react';
import './App.css';
import ApiData from "./components/ApiData"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star wars information</h1>
      </header>
      <main>
        <ApiData />
      </main>
    </div >
  );
}
export default App;
