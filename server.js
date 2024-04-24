import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";



const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://secure.myfees.lk",
    changeOrigin: true,
    pathRewrite: {
      "/^\/api/": '/api/sch/payments',
    },
  })

);

app.post("api" , (req, res) => {  
  console.log('Sending Request to the Target:', req.method, req.url);
  res.send("Hello POST");
}
);


app.get("/", (req, res) => {
  res.send("Hello World");
}
);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});



