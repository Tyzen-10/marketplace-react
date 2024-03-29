import { useRef } from "react"
import CartModal from "./CartModal"

/* eslint-disable react/prop-types */
const Header =()=>{
    const cartModal = useRef()
  const openCart = ()=>{
    cartModal.current.open()
  }
    return(
        <>
        <CartModal ref={cartModal}></CartModal>
        <div className="flex justify-between bg-orange-400 text-white py-3 px-14">
            <p className="text-4xl">MarketPlace - DummyJSoN</p>
            <button type="button" onClick={openCart} className="bg-red-500 py-2.5 rounded-sm font-bold text-base px-5">Cart</button>
        </div>
        </>
    )
}
export default Header