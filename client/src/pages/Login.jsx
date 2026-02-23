import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";   // ✅ import

const API = import.meta.env.VITE_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });

      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully ✅");

      navigate("/");   // ✅ dashboard route
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "#FAF8F1" }}
    >
      <div
        className="shadow p-4"
        style={{ width: 380, borderRadius: 16, background: "#FAF8F1" }}
      >
        <div className="text-center mb-4">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{ width: 48, height: 48, background: "#34656D", color: "#fff" }}
          >
            ➜
          </div>
          <h3 className="mt-3 fw-bold" style={{ color: "#334443" }}>
            Welcome Back
          </h3>
          <p className="text-muted">Sign in to manage your todos</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="btn w-100 rounded-3"
            style={{ background: "#34656D", color: "#fff" }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}