export const signup = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/signupUser", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("data in fetch signup");
};

export const loginUser = async (username, password) => {
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await response.json();
  return data;
};

// const handleViewAllUsers = async () => {
//   try {
//     // Make a GET request to the server to fetch all users
//     const response = await fetch("http://localhost:5001/users/getAllUsers", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Parse the response JSON data
//     const data = await response.json();

//     // If the request is successful, set the list of users
//     if (response.ok) {
//       setAllUsers(data.users);
//     } else {
//       // Handle errors if the request fails
//       console.error("Failed to fetch all users:", data.message);
//     }
//   } catch (error) {
//     console.error("Failed to fetch all users:", error.message);
//   }
// };

// // Return JSX for the admin panel
// return (
//   <div className="background">
//     <div className="admin-container">
//       <h2>Admin Panel</h2>
//       <button className="admin-button" onClick={toggleUsers}>
//         View All Users
//       </button>
//       {toggle && allUsers && <RenderAllUsers />}
//     </div>
//   </div>
// );
