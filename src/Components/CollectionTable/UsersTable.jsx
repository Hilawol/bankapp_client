import React from 'react'

function UsersTable({ data }) {
  console.log(data);
  return (
    <div>
      {data.map(i => <div key={i.id}>{`User Id: ${i.id}`}</div>)}
    </div>
  )
}

export default UsersTable
