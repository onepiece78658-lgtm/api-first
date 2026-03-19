import express from "express";

const app = express();
const PORT = 3009;

app.get("/", (req, res) => {
  res.json({ message: "Hello, from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
