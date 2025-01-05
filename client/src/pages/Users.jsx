import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);  // State to store fetched users
  const [loading, setLoading] = useState(true);  // State to show loading
  const [error, setError] = useState(null);  // State to handle any errors

  // Fetch users when the component is mounted
  useEffect(() => {
    fetch('https://server-jt5f.onrender.com/get_users')  // Replace <PORT> with your backend port
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data.users);  // Set fetched data to users state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error.message);  // Set error message if any error occurs
        setLoading(false);  // Stop loading even in case of error
      });
  }, []);  // Empty dependency array to run effect only once on component mount

  // Show loading state
  if (loading) {
    return <div>Loading users...</div>;
  }

  // Show error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display fetched user data
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> - {user.email}
            {/* You can display other user details here, like scores */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
