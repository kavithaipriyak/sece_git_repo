
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8001/signup", formData);
      if (response.data.isSignup) {
        setMessage("Signup Successful! Please login now.");
        setFormData({ email: "", username: "", password: "" });
      }
    } catch (error) {
      setMessage(error.response?.data?.Message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </label>
        <br />
        <br />
        <label>
          Username:
          <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange}
            required 
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </label>
        <br />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      {message && (
        <p style={{ color: message.includes("Successful") ? "green" : "red" }}>
          {message}
        </p>
      )}
      <p>
        Already having an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
