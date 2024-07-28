import express from "express";

const app = express();

const PORT = process.env.PORT || 8800;

app.use("/api/auth");
app.use("/api/user");
app.use("/api/post");

app.listen(PORT, () => {
  console.log("Connected");
});
