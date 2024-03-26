import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { getProductsFetch} from './actions'
import Products from './Products'
import { useState } from 'react'
import { Pagination } from './Pagination'
// import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch()
  const products = useSelector(store=>store.myFirstReducer.products)
  const [currentPage,setCurrentPage] = useState(1) 
  const [productsPerPage] = useState(10)
  //Info of current productss.
  const indexOfLastProduct = currentPage*productsPerPage
  const indexOfFirstProduct = indexOfLastProduct-productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

  const paginate = (number) =>{
    setCurrentPage(number)
  }

  return (
    <>
      <p className='text-center text-3xl'>Fetch List of Products from Dummy-JSON</p>
      <button className='m-auto block text-sm p-2 bg-gray-300 rounded-sm' type='button' onClick={()=>dispatch(getProductsFetch())}>Button</button>
      {/* {products.map(product=><p key={product.id}>{product.id} :{product.title}</p>)} */}
      <Products products={currentProducts}></Products>
      <Pagination totalProducts={products.length} productsPerPage={productsPerPage} paginate={paginate}></Pagination>
    </>
  )
}

export default App
