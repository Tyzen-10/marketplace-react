/* eslint-disable react/prop-types */

export const Pagination = ({totalProducts,productsPerPage,paginate}) => {
    const PageNumbers = []
    //populate the numbers.
    for(let i = 1;i<=Math.ceil(totalProducts/productsPerPage);i++){
        PageNumbers.push(i)
    }
  return (
    <nav>
        <ul className="flex">
            {PageNumbers.map((number)=><li key={number} onClick={()=>paginate(number)} className="p-2 bg-gray-300 m-1 rounded-sm">{number}</li>)}
        </ul>
    </nav>
  )
}
