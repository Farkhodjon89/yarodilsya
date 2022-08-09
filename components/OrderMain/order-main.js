import React from 'react'

const OrderMain = ({ order }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0', margin: '50px 0' }}>
      <h1> Спасибо за заказ!</h1>
      <h3>Ваш номер заказа: {order.databaseId}</h3>
    </div>
  )
}

export default OrderMain
