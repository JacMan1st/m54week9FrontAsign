import React from "react";

const GetAllUsers = () => {
  return (
    <div className="user-container">
      <h1>All Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllUsers;
