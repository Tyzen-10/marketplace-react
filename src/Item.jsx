/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "./actions";

export const Item = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.myFirstReducer.products);
  function onAddToCart(id) {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        products,
      },
    });
  }
  return (
    <li className="bg-white my-5 p-5 rounded-md flex gap-x-6">
      <div>
        <img
          src={product.images[0]}
          alt="image"
          className="h-36 w-36 object-cover rounded-md"
        />
      </div>
      <div className="w-full">
        <p className="text-gray-700 text-xl underline cursor-pointer font-semibold">
          {product.title}<span className="float-right">(Id:{product.id})</span>
        </p>
        <p className="text-md font-mono ml-4"><span className="text-sm">By </span>{product.brand}</p>
        <p className="font-mono text-red-500 mt-1"><span className="text-lg font-semibold text-black">$</span>{product.price}</p>
        <p className=""><span className="font-semibold text-sm">Rating: </span>{product.rating}</p>
        
        <p className="border-[1px] inline-block border-green-400 text-xs px-1 rounded-md text-gray-700 font-medium">{product.category}</p>
        <button
          onClick={() => onAddToCart(product.id)}
          type="button"
          className="block bg-green-400 text-white font-bold text-base px-5 py-2.5 rounded-md my-2"
        >
          Add
        </button>
      </div>
    </li>
  );
};
