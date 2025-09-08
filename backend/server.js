const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
  "https://my-portfolio-website-alpha-five.vercel.app",
  "http://localhost:5000" , // for local development
  "http://localhost:5173"   // If using Vite
],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
   }

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://suruchijha:ayush21012004@cluster0.0qhefk6.mongodb.net/portfolio", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

// Contact Schema with validation
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters long'],
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  status: {
    type: String,
    enum: ['unread', 'read'],
    default: 'unread'
  }
});

const Contact = mongoose.model("Contact", contactSchema);

// Input validation middleware
const validateContactInput = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "All fields (name, email, message) are required" 
    });
  }
  
  next();
};

// API Routes
app.post("/api/contact", validateContactInput, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create new contact entry
    const newContact = new Contact({ 
      name: name.trim(), 
      email: email.trim().toLowerCase(), 
      message: message.trim() 
    });
    
    // Save to database
    const savedContact = await newContact.save();
    
    console.log(`New contact message received from: ${name} (${email})`);
    
    res.status(201).json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon.",
      contactId: savedContact._id
    });
    
  } catch (error) {
    console.error("Error saving contact message:", error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        success: false, 
        message: "Validation failed", 
        errors 
      });
    }
    
    // Handle duplicate email if you add unique constraint later
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false, 
        message: "This email has already sent a message recently" 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Something went wrong. Please try again later." 
    });
  }
});

// Get all contact messages (for admin use)
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Server is running", 
    timestamp: new Date().toISOString() 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});



// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const server= app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check available at /api/health`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
  process.exit(1);
});

server.keepAliveTimeout = 120000; // 120 seconds
server.headersTimeout = 120000; // 120 seconds
