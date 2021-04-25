import React from 'react'

function TransactionsTable({ data }) {
  return (
    <div>
      {data.map(i => <div key={Date.now}>{`Account id: ${i.accountId}, Type:${i.type},Amount:${i.amount}`}</div>)}
    </div>
  )
}

export default TransactionsTable
