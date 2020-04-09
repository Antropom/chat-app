import React from 'react';
import Contact from './components/Contacts';
import './components/style.css';
import users from './components/ContactList'

function App() {
  return (
    <div className="App">
      <Contact {...users[0]}/>
      <Contact {...users[1]}/>
      <Contact {...users[2]}/>
      <Contact {...users[3]}/>
      <Contact {...users[4]}/>
    </div>
  );
}

export default App;
