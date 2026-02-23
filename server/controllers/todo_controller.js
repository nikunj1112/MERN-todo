// import { TodoCollection } from "../models/todo_models.js";


// export const createTodo = async (req, res) => {
//     try {
//       const { title, description } = req.body;
  
//       if (!title || title.trim() === "") {
//         return res
//           .status(400)
//           .json({ success: false, message: "Todo title is required" });
//       }
  
//       if (!req.user || !req.user.id) {
//         return res
//           .status(401)
//           .json({ success: false, message: "User not authenticated" });
//       }
  
//       const todo = await TodoCollection.create({
//         title,
//         description,
//         userId: req.user.id,
//       });
  
//       return res.status(201).json({ success: true, todo });
//     } catch (error) {
//       console.error("Create Todo Error:", error);
//       return res.status(500).json({
//         success: false,
//         message: "Server error while creating todo",
//         error: error.message,
//       });
//     }
//   };


// export const getTodos = async (req, res) => {
//   try {
//     const { status } = req.query;

//     const filter = { userId: req.user.id };

//     // Filter logic
//     if (status === "completed") {
//       filter.completed = true;
//     } else if (status === "pending") {
//       filter.completed = false;
//     }

//     const todos = await TodoCollection.find(filter).sort({ createdAt: -1 });
//     return res.status(200).json({ success: true, todos });
//   } catch (error) {
//     console.error("Get Todos Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while fetching todos",
//       error: error.message,
//     });
//   }
// };


// export const updateTodo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, completed } = req.body;

//     const todo = await TodoCollection.findOneAndUpdate(
//       { _id: id, userId: req.user.id }, 
//       { title, description, completed },
//       { new: true }
//     );

//     if (!todo) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Todo not found" });
//     }

//     return res.status(200).json({ success: true, todo });
//   } catch (error) {
//     console.error("Update Todo Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while updating todo",
//       error: error.message,
//     });
//   }
// };


// export const deleteTodo = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const todo = await TodoCollection.findOneAndDelete({
//       _id: id,
//       userId: req.user.id,
//     });

//     if (!todo) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Todo not found" });
//     }

//     return res.status(200).json({ success: true, message: "Todo deleted successfully" });
      
//   } catch (error) {
//     console.error("Delete Todo Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while deleting todo",
//       error: error.message,
//     });
//   }
// };


import { TodoCollection } from "../models/todo_models.js";

// ➕ Create Todo
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res
        .status(400)
        .json({ success: false, message: "Todo title is required" });
    }

    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }

    const todo = await TodoCollection.create({
      title,
      description,
      userId: req.user.id,
    });

    return res.status(201).json({ success: true, todo });
  } catch (error) {
    console.error("Create Todo Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating todo",
      error: error.message,
    });
  }
};

// 📥 Get Todos
export const getTodos = async (req, res) => {
  try {
    const { status } = req.query;

    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }

    const filter = { userId: req.user.id };

    if (status === "completed") filter.completed = true;
    if (status === "pending") filter.completed = false;

    const todos = await TodoCollection.find(filter).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, todos });
  } catch (error) {
    console.error("Get Todos Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching todos",
      error: error.message,
    });
  }
};

// ✏️ Update Todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }

    const todo = await TodoCollection.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { title, description, completed },
      { new: true }
    );

    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    return res.status(200).json({ success: true, todo });
  } catch (error) {
    console.error("Update Todo Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while updating todo",
      error: error.message,
    });
  }
};

// 🗑️ Delete Todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }

    const todo = await TodoCollection.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Delete Todo Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting todo",
      error: error.message,
    });
  }
};