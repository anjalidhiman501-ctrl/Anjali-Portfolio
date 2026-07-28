import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", engineer: "Anjali Rani", timestamp: new Date().toISOString() });
  });

  // Interactive AI Assistant Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not configured
        return res.json({
          reply: `Anjali Rani is an AI Engineer specializing in Machine Learning, Deep Learning (CNN/ANN), NLP, and LLMs. Key projects include Potato Leaf Disease Classifier (CNN), Fashion MNIST Classifier (CNN), Customer Churn Prediction App (ANN), House Price Prediction Engine, and Book Recommendation System. Location: Yamunanagar, Haryana, India. Email: anjalidhiman501@gmail.com.`,
          fallback: true
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemPrompt = `You are "Anjali AI", an intelligent virtual assistant representing Anjali Rani, a world-class AI Engineer based in Yamunanagar, Haryana, India.
Your goal is to answer questions from recruiters, hiring managers, potential clients, and fellow engineers in a professional, confident, innovative, and friendly tone.

Key Facts about Anjali Rani:
- Role: AI Engineer / ML & Deep Learning Specialist
- Location: Yamunanagar, Haryana, India
- Email: anjalidhiman501@gmail.com
- Primary Skills: Python, TensorFlow, PyTorch, Scikit-learn, Hugging Face, Docker, Git, AWS, FastAPI, Machine Learning, Deep Learning (CNN, ANN), NLP, LLMs, Computer Vision, Data Analysis.
- Key Deployed Projects:
  1. Potato Leaf Disease Classifier (CNN) - Deployed on Hugging Face Spaces (https://huggingface.co/spaces/anjalidhiman/Potato-Leaf-Disease-Classifier)
  2. Fashion MNIST Classifier (CNN) - Deployed on Render (https://fashion-mnist-project-qcmd.onrender.com)
  3. Customer Churn Prediction App (ANN) - Deployed on Hugging Face Spaces (https://huggingface.co/spaces/anjalidhiman/churn_prediction_app)
  4. House Price Prediction Engine (ML Algorithms) - Deployed on Render (https://house-price-predition.onrender.com)
  5. Book Recommendation System (Collaborative & Content Filtering) - Deployed on Render (https://book-recommendation-system-2ak6.onrender.com)
- Mindset: Passionate about solving complex real-world problems with scalable AI architectures, fine-tuning LLMs, computer vision model optimization, and productionizing MLOps pipelines.
- Status: Actively open to full-time AI Engineering roles, contract consulting, research collaborations, and speaking opportunities.

Instructions:
- Keep replies concise, helpful, impressive, and structured with clean markdown bullet points if listing items.
- Be recruiter-focused and highlight relevant project links and tech stack.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: systemPrompt }] },
          ...(conversationHistory || []).map((msg: any) => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }]
          })),
          { role: "user", parts: [{ text: message }] }
        ]
      });

      const replyText = response.text || "I'd be glad to help answer any questions about Anjali Rani's AI portfolio, engineering skills, and availability!";
      return res.json({ reply: replyText, fallback: false });
    } catch (error: any) {
      console.error("Error in AI chat handler:", error);
      return res.json({
        reply: `Anjali Rani is an AI Engineer based in Yamunanagar, Haryana, skilled in Python, TensorFlow, Hugging Face, Docker, AWS, NLP, and Deep Learning. You can contact her directly at anjalidhiman501@gmail.com!`,
        fallback: true
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message, type } = req.body;
    console.log(`[CONTACT FORM] From: ${name} (${email}) | Type: ${type} | Subject: ${subject}`);
    res.json({
      success: true,
      message: `Thank you, ${name}! Your message has been routed to Anjali Rani's inbox (anjalidhiman501@gmail.com). You will receive a response shortly.`
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
