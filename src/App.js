import React from 'react'
import EmailList from './components/EmailList';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <p className='filter'>Filter By: <span>Unread</span> <div className='read'><span>Read</span></div> <span>Favorites</span></p>
      <EmailList />
    </div>
  )
}

export default App