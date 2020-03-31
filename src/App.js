import React from 'react';
import Contact from './components/Contacts';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <Contact name='Ethel Hayes' image='https://randomuser.me/api/portraits/women/96.jpg' online/>
      <Contact name='Claire Simmons' image='https://randomuser.me/api/portraits/women/56.jpg' online/>
      <Contact name='Lorraine Lynch' image='https://randomuser.me/api/portraits/women/60.jpg'/>
    </div>
  );
}

export default App;
