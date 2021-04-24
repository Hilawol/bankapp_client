import React, { useState, useEffect } from 'react'
import './collectionTable.css'

function CollectionTable({ view }) {

  const [currentView, setCurrentView] = useState("users");



  return (
    <div id="collectionTable">
      {view}
    </div>
  )
}

export default CollectionTable
