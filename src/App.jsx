import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { getProductsFetch} from './actions'
import Products from './Products'
import { useEffect, useState } from 'react'
import { Pagination } from './Pagination'
import Search from './Search'
import Header from './Header'
// import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch()
  const products = useSelector(store=>store.myFirstReducer.products)
  useEffect(()=>{
    dispatch(getProductsFetch())
  },[dispatch])
  //products to filtered products.
  const [search,setSearch] = useState('')
  const filteredProducts = products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase())||product.brand.toLowerCase().includes(search.toLowerCase()))
  console.log(filteredProducts,"filteredProducts")
  const handleSearch = (value)=>{
    setSearch(value)
  }
  const [currentPage,setCurrentPage] = useState(1) 
  const [productsPerPage] = useState(10)
  //Info of current productss.
  const indexOfLastProduct = currentPage*productsPerPage
  const indexOfFirstProduct = indexOfLastProduct-productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct)

  const paginate = (number) =>{
    setCurrentPage(number)
  }

  return (
    <>
      {/* <button className='m-auto block text-sm p-2 bg-gray-300 rounded-sm' type='button' onClick={()=>dispatch(getProductsFetch())}>Button</button> */}
      {/* {products.map(product=><p key={product.id}>{product.id} :{product.title}</p>)} */}
      <Header></Header>
      <Search handleSearch={handleSearch} search={search}></Search>
      <Pagination totalProducts={filteredProducts.length} productsPerPage={productsPerPage} paginate={paginate}></Pagination>
      <Products products={currentProducts}></Products>
      <Pagination totalProducts={filteredProducts.length} productsPerPage={productsPerPage} paginate={paginate}></Pagination>
    </>
  )
}

export default App
