export const ContactList = ({ filteredContacts, onDeleteUser }) => {
  return (
    <ul>
      {filteredContacts.map(user =>
        <li className="flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 justify-between" key={user.id}>
          <div>
            <p className="mt-1 text-gray-600">{user.name}:</p>
            <p className="mt-1 text-gray-600"> {user.number}</p>
          </div>
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => onDeleteUser(user.id)}>
            Delete
          </button>
        </li>)}
    </ul>
  )
}
