import React, { useState, useEffect } from 'react'
import './collectionTable.css'
import api from '../../Api/api'
import TransactionsTable from './TransactionsTable';
import AccountsTable from './AccountsTable';
import UsersTable from './UsersTable';

function CollectionTable({ view }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("in use effect.view:", view);
    const getData = async () => {
      const results = await api.get(`/${view}`);
      setData(results.data);
      console.log("data:", results.data);
    }
    getData();
  }, [view]);

  let table;
  if (data.length > 0) {
    switch (view) {
      case "users":
        table = <UsersTable data={data} />
        break;
      case "accounts":
        table = <AccountsTable data={data} />
        break;
      case "transactions":
        table = <TransactionsTable data={data} />
        break;
      default:
    }
  }

  return (
    <div id="collectionTable">
      <h2>{view.toUpperCase()}</h2><br />
      {table}
    </div>
  )
}

export default CollectionTable
