import React, { useState } from "react";

const INITIAL_STATE = {
  name: '',
  number: '',
}

export const ContactForm = ({ onAddContact }) => {
  const [formState, setFormState] = useState(INITIAL_STATE)

  const handleChangeInput = e => {
    const { target } = e;
    const { name, value } = target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitAddUser = (e) => {
    e.preventDefault();
    onAddContact(formState);
    setFormState(INITIAL_STATE)
  }

  const { name, number } = formState;
  return (
    <form className="space-y-6" onSubmit={handleSubmitAddUser} >
      <input className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-2 sm:text-sm sm:leading-6" name="name" value={name} onChange={handleChangeInput} placeholder="Enter name" />
      <input className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-2 sm:text-sm sm:leading-6" name='number' value={number} onChange={handleChangeInput} placeholder="Enter phone number" />
      <button className="flex w-full justify-center rounded-md bg-black px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Add contact</button>
    </form>
  )
}