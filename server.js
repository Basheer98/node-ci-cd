const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, etc.)
app.use(express.static("public"));

// Route to serve the landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API Route
app.get("/api", (req, res) => {
  res.json({ message: "🚀 CI/CD Node.js App is Running!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});