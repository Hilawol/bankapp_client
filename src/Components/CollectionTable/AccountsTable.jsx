import React from 'react'

function AccountsTable({ data }) {
  return (
    <div>
      {data.map(i => <div key={i}>{`Balance: ${i.balance}, Credit: ${i.credit}, UserId: ${i.userId}`}</div>)}
    </div>
  )
}

export default AccountsTable
