import React from 'react';

const DashboardPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>

      <h2>Welcome to Dashboard!</h2>
    <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
