/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react"
import Cart from "./Cart"

const CartModal = forwardRef(function CartModal(_,ref){
    const dialog = useRef()
    useImperativeHandle(ref,()=>{
        return{
            open:()=>{
                dialog.current.showModal()
            },
            close:()=>{
                dialog.current.closeModal()
            }
            
        }
    })
    
    return(
        <dialog ref={dialog} className="backdrop:backdrop-blur-sm w-1/2 px-14 py-7 rounded-md">
            <div className="flex justify-between border-b-2 pb-2">
            <p className="text-2xl font-semibold">My Cart</p>
            <form method="dialog">
                <button className="bg-gray-400 py-1 rounded-md font-bold text-base px-4 text-white">x</button>
            </form>
            </div>
            <Cart></Cart>
            
        </dialog>
    )
})
export default CartModal