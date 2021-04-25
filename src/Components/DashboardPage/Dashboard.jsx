import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Main from '../Main/Main'
import './dashboard.css';

function Dashboard() {
  const [view, setCurrentView] = useState('users');

  const setView = (v) => {
    switch (v) {
      case "usersBtn":
        setCurrentView("users");
        break;
      case "accountsBtn":
        setCurrentView("accounts");
        break;
      case "transactionsBtn":
        setCurrentView("transactions");
        break;
      default:
    }
    console.log("seeting view:", v);
  }

  return (
    <div id="dashboard">
      <Sidebar onSidebarClick={setView} />
      <Main view={view} />
    </div>
  )
}

export default Dashboard
