import express from "express";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("You just copied a server! (in node.js)");
// });

// server.listen(3001, () => console.log("server is running..."));

const app = express();
const port = 3002;
const router = express.Router();

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello from the Express!");
});

router.get("/notes", (req, res) => {
  res.send("All user notes");
});

router.post("/notes", (req, res) => {
  res.send("New note");
});

router.put("/notes/:id", (req, res) => {
  res.send("Updated note");
});

router.delete("/notes/:id", (req, res) => {
  res.send("Note deleted!");
});

router.get("/notes/:id", (req, res) => {
  res.send(`Note #${req.params.id}`);
});

app.listen(port, () => console.log("Server is ready!"));
