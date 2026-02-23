import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API = import.meta.env.VITE_API_URL;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/auth/register`, { name, email, password });
      toast.success("Account created 🎉");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ background: "#FAF8F1" }}>
      <div className="shadow p-4" style={{ width: 380, borderRadius: 16, background: "#FAF8F1" }}>
        <div className="text-center mb-4">
          <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{ width: 48, height: 48, background: "#FAEAB1", color: "#334443" }}>
            👤+
          </div>
          <h3 className="mt-3 fw-bold" style={{ color: "#334443" }}>Create Account</h3>
          <p className="text-muted">Start organizing your tasks today</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input className="form-control rounded-3" placeholder="Your name"
              onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="mb-2">
            <label className="form-label">Email</label>
            <input className="form-control rounded-3" placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control rounded-3" placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button className="btn w-100 rounded-3"
            style={{ background: "#34656D", color: "#fff" }}>
            Create Account
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}