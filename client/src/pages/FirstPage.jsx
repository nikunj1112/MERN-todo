import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ background: "#FAF8F1" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg border-bottom" style={{ background: "#FAF8F1" }}>
        <div className="container">
          <span className="navbar-brand fw-bold" style={{ color: "#334443" }}>
            📝 TodoApp
          </span>
          <div className="ms-auto d-flex gap-2">
            <Link
              to="/login"
              className="btn btn-sm rounded-pill px-3"
              style={{ color: "#34656D", border: "1px solid #34656D" }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm rounded-pill px-3"
              style={{ background: "#34656D", color: "#fff" }}
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - full height */}
      <div className="container   mt-5  pt-5 mb-5 pb-5" >
        <div className="row align-items-center w-100">
          {/* Left */}
          <div className="col-md-6   ps-5">
            <h1 className="fw-bold" style={{ color: "#334443", fontSize: "2.6rem" }}>
              Manage your tasks <br /> the smart way 🚀
            </h1>
            <p className="text-muted mt-3">
              A simple and secure Todo app built with MERN Stack.  
              Plan your day, track your progress, and stay productive.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link
                to="/login"
                className="btn rounded-pill px-4 py-2"
                style={{ background: "#34656D", color: "#fff" }}
              >
                Get Started
              </Link>
              <Link
                to="/register"
                className="btn rounded-pill px-4 py-2"
                style={{ border: "1px solid #34656D", color: "#34656D" }}
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-md-6 ps-5 pt-5 d-flex justify-content-end">
            <div
              className="card border-0  rounded-4 p-4"
              style={{ maxWidth: 420, width: "100%", background: " #34656D " }}
            >
              <h5 className="fw-semibold mb-3" style={{ color: "#FAF8F1" }}>
                Why choose this app?
              </h5>
              <ul className="list-unstyled text-muted mb-0" >
                <li className="mb-2" style={{ color: "#FAF8F1" }}>✅ Add, edit, delete todos</li>
                <li className="mb-2" style={{ color: "#FAF8F1" }}>🔐 Secure JWT Authentication</li>
                <li className="mb-2" style={{ color: "#FAF8F1" }}>📊 Track completed tasks</li>
                <li className="mb-2" style={{ color: "#FAF8F1" }}>🔍 Filter pending & completed</li>
                <li className="mb-2" style={{ color: "#FAF8F1" }}>⚡ Fast & responsive UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      {/* Features Section */}
      <div className="container ">
        <div className="row g-3 p-5">
          {[
            { title: "Secure Login", icon: "🔐", desc: "JWT based authentication for safety" },
            { title: "Smart Filters", icon: "🎯", desc: "Filter completed & pending tasks" },
            { title: "Fast UI", icon: "⚡", desc: "Smooth and responsive experience" },
          ].map((f, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="fs-3">{f.icon}</div>
                <h6 className="fw-semibold mt-2" style={{ color: "#334443" }}>
                  {f.title}
                </h6>
                <p className="text-muted mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-top py-3">
        <div className="container text-center text-muted">
          © {new Date().getFullYear()} TodoApp • Built with MERN Stack
        </div>
      </footer>
    </div>
  );
}



