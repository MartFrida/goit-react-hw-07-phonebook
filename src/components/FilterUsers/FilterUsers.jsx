export const FilterUsers = ({ filter, handleChangeInput }) => {
  return (<>
    <h3>Find contacts by name</h3>
    <input class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='filter' value={filter} onChange={handleChangeInput} placeholder='Enter user name'></input>
  </>)
}