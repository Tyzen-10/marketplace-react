/* eslint-disable react/prop-types */
// import { useSelector } from 'react-redux'

import { Item } from "./Item";

export default function Products({products}){
    // const products = useSelector(store=>store.myFirstReducer.products)
    return(
        <ul className="bg-gray-300 rounded-sm p-5 mt-2">
            {products.map(product=><Item key={product.id} product={product}></Item>)}
        </ul>
    )
}