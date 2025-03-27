import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "", avatar: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    } catch (err) {
      console.error("Error fetching user", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      navigate("/users");
    } catch (err) {
      console.error("Error updating user", err);
    }
  };

  return (
    <div className="edit-user-container">
      <h2 className="user-title">Edit User</h2>
      
      {/* Display User Avatar */}
      <div className="avatar-container">
        <img src={user.avatar} alt="User Avatar" className="user-avatar" />
      </div>

      <form onSubmit={handleUpdate}>
        <input type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} required />
        <input type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} required />
        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
