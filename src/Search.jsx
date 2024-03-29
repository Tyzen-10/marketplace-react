/* eslint-disable react/prop-types */
const Search = ({handleSearch,search}) => {
  return (
    <div className="flex md:min-w-[300px]">
      <label htmlFor="search-input" className="flex items-center text-sm">Search:</label>
      <input id="search-input" type="text" onChange={(event)=>handleSearch(event.target.value)} className="border-[1px] border-gray-700 rounded-md p-2 text-black ml-2 w-full" value={search}/>
    </div>
    
  )
}
export default Search