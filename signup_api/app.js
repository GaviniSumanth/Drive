const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express')
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Admin-user:nqcMs9XUQLtIQlQe@cluster0.2tabaib.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongo DB is connected');
}).catch(err => {
  console.error('Mongo DB connection error:', err);
});


// Define routes for sign-up and sign-in
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
