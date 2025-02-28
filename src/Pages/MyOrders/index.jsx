import { useContext } from 'react'
import {Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout className='bg-red-100'>
        <div className='flex w-100 items-center justify-center relative mb-6'>
          <h1 className='font-medium text-2xl'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`} >
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts = {order.totalProducts}
              />
            </Link>
          ))
        }
    </Layout>
  )
}

export default MyOrders