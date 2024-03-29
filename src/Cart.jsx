// import { useContext } from "react";
// import { CartContext } from "./store/CartContext";
import { UPDATE_QUANTITY } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  // const CartCtx = useContext(CartContext);
  const dispatch = useDispatch()
  const onUpdateQuantity = (id,change)=>{
    dispatch({type: UPDATE_QUANTITY,payload:{
      id,
      change
    }})
  }
  const items = useSelector(store=>store.myFirstReducer.items)
  const Total = items.reduce((accumulator, item) => {
    accumulator += item.price * item.quantity;
    return accumulator;
  }, 0);
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="bg-gray-300 rounded-md my-2">
            <div className="flex h-16" id="cart-parent">
              <img src={item.image} alt={item.name} className="object-cover" />
              <div className="flex justify-between w-full mx-2">
                <div className="block">
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="font-mono"><span className="text-lg font-semibold">$</span>{item.price}</p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="px-2 py-1 bg-green-400 rounded-sm text-white text-bold"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <p className="px-2 py-1 rounded-sm">{item.quantity}</p>
                  <button
                    type="button"
                    className="px-2 py-1 bg-red-500 rounded-sm text-white text-bold"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total:{Total}</p>
    </>
  );
};
export default Cart;
