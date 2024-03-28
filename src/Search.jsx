/* eslint-disable react/prop-types */
const Search = ({handleSearch,search}) => {
  return (
    <>
    <input type="text" onChange={(event)=>handleSearch(event.target.value)} className="border-2 border-black" value={search}/>
    </>
  )
}
export default Search