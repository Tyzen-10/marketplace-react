import { useRef } from "react"
import CartModal from "./CartModal"
import Search from "./Search"

/* eslint-disable react/prop-types */
const Header =({handleSearch,search})=>{
    const cartModal = useRef()
  const openCart = ()=>{
    cartModal.current.open()
  }
    return(
        <>
        <CartModal ref={cartModal}></CartModal>
        <div className="flex justify-between bg-gray-700 text-white py-3 px-14 rounded-md my-2">
            <p className="text-4xl">Marketplace<span className="text-sm">.in</span></p>
            <Search handleSearch={handleSearch} search={search}></Search>
            <button type="button" onClick={openCart} className="bg-red-500 py-2.5 rounded-lg font-bold text-base px-5">Cart</button>
        </div>
        </>
    )
}
export default Header