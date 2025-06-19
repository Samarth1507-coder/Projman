const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ticketRoutes = require("./routes/tickets"); 
const projectRoutes = require("./routes/project");
const taskRoutes = require('./routes/task');
const commentRoutes = require('./routes/comment');
const teamRoutes = require('./routes/team');
const notificationRoutes = require("./routes/notification");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tickets", ticketRoutes);
app.use("/api/projects", projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/teams', teamRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

