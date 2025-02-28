import {ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts} = props

    return (
        <div className="group flex justify-between items-center cursor-pointer mb-3 border border-black rounded-lg p-4 w-100  hover:text-white hover:bg-black transition">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.2022</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>$ {totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black  group-hover:text-white'/>
                </p>

            </div>
        </div>
    )

}

export default OrdersCard