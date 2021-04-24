import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Main from '../Main/Main'
import './dashboard.css';

function Dashboard() {
  const [view, setCurrentView] = useState('users');

  const setView = (v) => {
    console.log("seeting view:", v);
    setCurrentView(v);
  }

  return (
    <div id="dashboard">
      <Sidebar onSidebarClick={setView} />
      <Main view={view} />
    </div>
  )
}

export default Dashboard
