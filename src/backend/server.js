import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://secure.myfees.lk",
    changeOrigin: true,
    pathRewrite: {
      "^/api": '/api/sch/payments', // Corrected pathRewrite regular expression
    },
  })
);

app.post("/api", (req, res) => {  
  console.log('Sending Request to the Target:', req.method, req.url);
  res.send("Hello POST");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
