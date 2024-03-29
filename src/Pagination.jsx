/* eslint-disable react/prop-types */

export const Pagination = ({totalProducts,productsPerPage,paginate,handleSelection}) => {
    const PageNumbers = []
    //populate the numbers.
    for(let i = 1;i<=Math.ceil(totalProducts/productsPerPage);i++){
        PageNumbers.push(i)
    }
  return (
    <nav className="flex">
      <p className="flex items-center text-sm">Sort By: </p>
      <select id="sort-input" onChange={(event)=>{handleSelection(event.target.value)}} className="border-[1px] text-sm">
        <option value="none">None</option>
        <option value="price">Price</option>
      </select>
        <ul className="flex justify-center">
            {PageNumbers.map((number)=><li key={number} onClick={()=>paginate(number)} className="p-2 bg-gray-300 m-1 rounded-sm text-xs font-semibold">{number}</li>)}
        </ul>
    </nav>
  )
}
