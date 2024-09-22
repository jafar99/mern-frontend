import React, { useEffect, useState } from 'react';
import UsersTable from '../components/UsersTable';
import UserForm from '../components/UserForm';


function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UserForm setUsers={setUsers} />
      <UsersTable users={users} />
    </div>
  );
}

export default UsersPage;
