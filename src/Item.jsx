/* eslint-disable react/prop-types */

import { useDispatch,useSelector } from "react-redux"
import { ADD_TO_CART } from "./actions"

export const Item = ({product}) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.myFirstReducer.products);
    function onAddToCart(id){
        dispatch({
            type: ADD_TO_CART,
            payload:{
              id,
              products
            }
        })
    }
  return (
    <li className="bg-white my-5 p-5 rounded-md">{product.id}:{product.title}:${product.price}
    {/* <img src={product.images[0]} alt="image" /> */}
    <p>rating:{product.rating}</p>
    <p>brand:{product.brand}</p>
    <p>Category:{product.category}</p>
    <button onClick={()=>onAddToCart(product.id)} type="button" className="bg-green-400 text-white font-bold text-base px-5 py-2.5 rounded-sm">Add</button>
    </li>
  )
}
