import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <h1>User List Page</h1>;
};

export default Users;
