import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Chat from "./models/chat.js";
import dotenv from "dotenv";
import mysql from 'mysql2';
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";


dotenv.config();
const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST"], // Allow specific request methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
}));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

//payment status code
app.get("/api/check-purchase/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;

    const result = await db.query(
        "SELECT * FROM purchases WHERE user_id = ? AND course_id = ?",
        [userId, courseId]
    );

    if (result.length > 0) {
        res.json({ purchased: true });
    } else {
        res.json({ purchased: false });
    }
});

//razor pay code 
const razorpay = new Razorpay({
    key_id: process.env.Razorpay_KEY_ID,
    key_secret: process.env.Razorpay_KEY_Secret,
});

app.post("/api/razorpay-order", async (req, res) => {
    try {
        const amount = req.body.amount * 100; // Convert amount to paise (1 INR = 100 paise)

        const options = {
            amount: amount,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);
        res.json(order); // ✅ Send valid JSON response
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Failed to create order" }); // ✅ Send JSON error response
    }
});


// Nodemailer Transporter (Use your email credentials)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_KEY_USER,
        pass: process.env.EMAIL_KEY_PASS,
    },
});

// Contact Form API
app.post("/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        // Email to Admin
        const adminMailOptions = {
            from: process.env.EMAIL_KEY_USER,
            to: process.env.RECEIVER__KEY_EMAIL, // Admin's email
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        };

        // Email to User (Confirmation)
        const userMailOptions = {
            from: process.env.EMAIL_KEY_USER,
            to: email, // User's email
            subject: "Thank you for contacting us!",
            text: `Hello ${name},\n\nThank you for reaching out to us! We have received your message and will get back to you soon.\n\nBest regards,\nE-Learning Team`,
        };

        // Send emails
        transporter.sendMail(adminMailOptions, (adminErr, adminInfo) => {
            if (adminErr) {
                console.error("Admin email failed:", adminErr);
            }
            transporter.sendMail(userMailOptions, (userErr, userInfo) => {
                if (userErr) {
                    console.error("User email failed:", userErr);
                }
                res.status(200).json({ message: "Message received, emails sent!" });
            });
        });
    });
});



// Store Chat Messages
app.post("/chat", async (req, res) => {
    const { message, userId } = req.body;

    if (!userId) return res.status(400).json({ error: "User ID is required" });

    try {
        await Chat.create({ userId, role: "user", content: message });

        const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: message }] }],
        });

        const reply = result.response.candidates[0].content.parts[0].text;

        await Chat.create({ userId, role: "assistant", content: reply });

        res.json({ reply });
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "AI Error" });
    }
});

// Fetch Chat History for Auth0 User
app.get("/chat-history/:userId", async (req, res) => {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ error: "User ID is required" });

    const history = await Chat.findAll({ where: { userId } });
    res.json({ history });
});

app.listen(5000, () => console.log("Server running on port 5000"));
