import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login if no token
    } else {
      fetchUsers();
    }
  }, [page, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  return (
    <div className="user-container">
      <h2 className="user-title">User List</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar} alt={user.first_name} className="user-avatar" />
              </td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit-btn" onClick={() => navigate(`/edit/${user.id}`)}>
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="page-btn" disabled={page === 1} onClick={() => setPage(page - 1)}>
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button className="page-btn" onClick={() => setPage(page + 1)}>
          Next <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default UserList;
