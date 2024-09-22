import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/users');
  };

  return (
    <div>
      <h1>Welcome to the MERN App</h1>
      <button onClick={handleNavigate}>Go to Users</button>
    </div>
  );
}

export default Home;
