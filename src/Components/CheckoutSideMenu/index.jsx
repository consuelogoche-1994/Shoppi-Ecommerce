import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setCartOrder([...context.order , orderToAdd]);
        context.setCartProducts([]);
        context.setSearchByTitle(null);
        context.closeCheckoutSideMenu()
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 fixed bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h1 className='font-medium text-xl'>My order</h1>
                <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu() }
                />
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
                {
                    context.cartProducts.map((product)=>(
                        <OrderCard 
                            key={product.id} 
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price} 
                            handleDelete ={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to = '/my-orders/last'>
                    <button className='cursor-pointer w-full bg-black py-2 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>

        </aside>
    )
}

export default CheckoutSideMenu