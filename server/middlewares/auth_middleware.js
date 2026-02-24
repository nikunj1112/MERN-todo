import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
   
    const token = req.headers.authorization?.split(" ")[1];

    // Agar token nahi mila
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    // Token verify karo
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // User id request me set karo
    req.user = decoded; // { id: userId }

    next(); // aage controller ko jane do
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  
};