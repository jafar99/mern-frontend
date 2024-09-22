import React, { useState } from 'react';

function UserForm({ setUsers }) {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const newUser = await response.json();
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
