import React from 'react';

function SidebarBtn({ id, iconClass, onBtnClick }) {

  const onUserClick = (event) => {
    console.log("sideBarBtn:", event.currentTarget.id);
    onBtnClick(event.currentTarget.id);
  }

  return (
    <div id={id} className="sidebarBtn" onClick={onUserClick} >
      <i className={iconClass} ></i>
    </div>
  )
}

export default SidebarBtn
