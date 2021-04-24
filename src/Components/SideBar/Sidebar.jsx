import React from 'react';
import './sidebar.css';
import SidebarBtn from './SidebarBtn';

function Sidebar({ onSidebarClick }) {

  return (
    <div id="sidebar">
      <SidebarBtn id="usersBtn" iconClass="fas fa-users" onBtnClick={onSidebarClick} />
      <SidebarBtn id="accountsBtn" iconClass="fas fa-file-invoice-dollar" onBtnClick={onSidebarClick} />
      <SidebarBtn id="transactionsBtn" iconClass="fas fa-exchange-alt" onBtnClick={onSidebarClick} />
    </div>
  )
}

export default Sidebar
