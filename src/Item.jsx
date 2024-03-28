/* eslint-disable react/prop-types */
export const Item = ({product}) => {
  return (
    <li className="bg-white my-5 p-5 rounded-md">{product.id}:{product.title}:${product.price}
    {/* <img src={product.images[0]} alt="image" /> */}
    <p>rating:{product.rating}</p>
    <p>brand:{product.brand}</p>
    <p>Category:{product.category}</p>
    </li>
  )
}
