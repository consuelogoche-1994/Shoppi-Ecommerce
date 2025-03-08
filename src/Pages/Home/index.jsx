import { useContext, useEffect } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/card"
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { useParams} from 'react-router-dom'

function Home() {
const context = useContext(ShoppingCartContext)

const { category }  = useParams();

useEffect(() => {
  context.setSearchByCategory(category);
}, [category]);


const renderView = () => {
  if(context.searchByTitle?.length > 0){
    if(context.filteredItems?.length >0){
      return (
        context.filteredItems?.map((item) => (
          <Card data={item} key={item.id}/>
        ))
      )
    } else {
      return (
        <div className='w-full text-center'>No results found :(</div>
      )
    }
  } else {
    return (
      context.filteredItems?.map((item) => (
        <Card data={item} key={item.id}/>
      ))
    )
  }
}

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center relative w-full mb-6'>
        <h1 className='font-medium text-xl mb-6'>Exclusive Products</h1>
        <input 
          type="text" 
          placeholder='Search a product' 
          className='rounded-lg border border-black w-100 p-2 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[95%] sm:w-[90%] md:w-[80%] max-w-screen-lg'>
          { renderView() }
        </div>
        <ProductDetail />
    </Layout>
  )
}

export default Home