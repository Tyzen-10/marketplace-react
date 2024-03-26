/* eslint-disable react/prop-types */
// import { useSelector } from 'react-redux'

export default function Products({products}){
    // const products = useSelector(store=>store.myFirstReducer.products)
    return(
        <ul>
            {products.map(product=><li className='list-item border-blue-400 border-b-2' key={product.id}>{product.id} :{product.title}</li>)}
        </ul>
    )
}