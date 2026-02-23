import { useEffect, useState } from "react";
import api from "../api/db.js";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Edit states
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const fetchTodos = async (status = "") => {
    try {
      const { data } = await api.get(`/todos${status ? `?status=${status}` : ""}`);
      setTodos(data.todos || []);
    } catch {
      toast.error("Failed to load todos");
    }
  };

  useEffect(() => {
    fetchTodos(filter === "all" ? "" : filter);
  }, [filter]);

  const addTodo = async () => {
    if (!title.trim()) return toast.error("Title required");
    try {
      await api.post("/todos", { title, description });
      toast.success("Todo added ✅");
      setTitle("");
      setDescription("");
      fetchTodos(filter === "all" ? "" : filter);
    } catch {
      toast.error("Failed to add todo");
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await api.put(`/todos/${id}`, { completed: !completed });
      fetchTodos(filter === "all" ? "" : filter);
    } catch {
      toast.error("Failed to update status");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      toast.success("Todo deleted 🗑");
      fetchTodos(filter === "all" ? "" : filter);
    } catch {
      toast.error("Failed to delete todo");
    }
  };

  const startEdit = (todo) => {
    setEditId(todo._id);
    setEditTitle(todo.title);
    setEditDescription(todo.description || "");
  };

  const saveEdit = async (id) => {
    if (!editTitle.trim()) return toast.error("Title required");
    try {
      await api.put(`/todos/${id}`, {
        title: editTitle,
        description: editDescription,
      });
      toast.success("Todo updated ✨");
      setEditId(null);
      setEditTitle("");
      setEditDescription("");
      fetchTodos(filter === "all" ? "" : filter);
    } catch {
      toast.error("Failed to update todo");
    }
  };

  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const doneCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-vh-100" style={{ background: "#FAF8F1" }}>
      {/* Header */}
      <div className="border-bottom">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bold mb-0" style={{ color: "#334443" }}>
              My Todos
            </h4>
            <small className="text-muted">Hello, rana nikunj 👋</small>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span
              className="px-3 py-1 rounded-4"
              style={{ background: "#E7F3EF", color: "#34656D", fontSize: 13 }}
            >
              {doneCount}/{todos.length} done
            </span>
            <button
              className="btn btn-sm rounded-pill px-3"
              style={{ border: "1px solid #ddd" }}
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Add Todo */}
      <div className="container mt-4">
        <div className="card border-0 rounded-4 p-3" style={{ background: "#FAF8F1" }}>
          <div className="d-flex gap-2 mb-2">
            <input
              className="form-control rounded-4 px-3"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="btn rounded-4 px-5"
              style={{ background: "#34656D", color: "#fff" }}
              onClick={addTodo}
            >
              + Add
            </button>
          </div>
          <textarea
            className="form-control rounded-4"
            rows={2}
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Search + Filters */}
      <div className="container mt-3 d-flex justify-content-between align-items-center">
        <input
          className="form-control rounded-pill w-50 ms-3 px-3"
          placeholder="Search todos..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="btn-group rounded-4 me-3 px-1" role="group">
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              className="btn btn-sm"
              onClick={() => setFilter(f)}
              style={{
                background: filter === f ? "#34656D" : "#E9ECEF",
                color: filter === f ? "#fff" : "#333",
              }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Todo List */}
      <div className="container mt-4 pb-5">
        {filteredTodos.length === 0 ? (
          <div className="text-center text-muted mt-5">
            <div style={{ fontSize: 42 }}>📋</div>
            <p className="mt-2">No todos yet. Add one above!</p>
          </div>
        ) : (
          filteredTodos.map((t) => (
            <div
              key={t._id}
              className="card border-0 shadow-sm rounded-4 ms-3 me-3 p-3 mb-2"
              style={{ background: "#fff" }}
            >
              <div className="d-flex ms-3 me-3 justify-content-between align-items-start gap-3">
                {/* Left */}
                <div className="d-flex align-items-start gap-3 w-100">
                  <input
                    type="checkbox"
                    className="form-check-input mt-1"
                    checked={t.completed}
                    onChange={() => toggleTodo(t._id, t.completed)}
                  />

                  {editId === t._id ? (
                    <div className="w-100">
                      <input
                        className="form-control rounded-3 mb-2"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                      <textarea
                        className="form-control rounded-3"
                        rows={2}
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Description (optional)"
                      />
                    </div>
                  ) : (
                    <div>
                      <div
                        className="fw-semibold"
                        style={{
                          color: "#334443",
                          textDecoration: t.completed ? "line-through" : "none",
                          opacity: t.completed ? 0.6 : 1,
                        }}
                      >
                        {t.title}
                      </div>
                      {t.description && (
                        <small className="text-muted d-block">
                          {t.description}
                        </small>
                      )}
                    </div>
                  )}
                </div>

                {/* Right buttons */}
                <div className="d-flex gap-2">
                  {editId === t._id ? (
                    <button
                      className="btn btn-sm rounded-pill px-3"
                      style={{ background: "#34656D", color: "#fff" }}
                      onClick={() => saveEdit(t._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm rounded-circle"
                      style={{
                        background: "#E7F3EF",
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => startEdit(t)}
                    >
                      ✏️
                    </button>
                  )}

                  <button
                    className="btn btn-sm rounded-circle"
                    style={{
                      background: "#FAEAB1",
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => deleteTodo(t._id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}