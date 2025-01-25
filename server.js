const express = require('express');
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Basic API Endpoint
app.get('/api', (req, res) => {
    res.json({ message: "🚀 CI/CD Node.js App is Running!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});