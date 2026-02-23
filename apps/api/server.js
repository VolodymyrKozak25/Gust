import express from "express";

const noteTestList = [
  {
    id: 1,
    createdAt: new Date(Date.now()),
    title: "About Bob",
    text: "Bob was a good guy, we should play again!",
  },
  {
    id: 2,
    createdAt: new Date(Date.now() - 10000),
    title: "About Jane",
    text: "Jane was really strange today. I wish I knew why.",
  },
  {
    id: 3,
    createdAt: new Date(Date.now() - 10000000),
    title: "Old note",
    text: "My new toaster is broken already, I should fix it next week.",
  },
];

const app = express();

const port = 3002;

const router = express.Router();

app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () => console.log("Server is ready!"));

//middleware
app.use((req, res, next) => {
  const timestamp = new Date().toUTCString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// root
app.get("/", (req, res) => {
  res.send("API root");
});

// notes list
router.get("/notes", (req, res) => {
  res.json(noteTestList);
});

// create new note
router.post("/notes", (req, res) => {
  const { createdAt, title, text } = req.body;

  if (!createdAt || !text) {
    return res
      .status(400)
      .send({ error: "Missing required note data values." });
  }

  const newNote = {
    id: noteTestList.length + 1,
    createdAt: createdAt,
    title: title,
    text: text,
  };

  noteTestList.push(newNote);

  return res.status(201).json(newNote);
});

// update note
router.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = noteTestList.findIndex((note) => note.id === id);

  if (index === -1) {
    return res
      .status(404)
      .send({ error: "Note with id " + id + " does not exist." });
  }

  const { title, text } = req.body;

  if (title) {
    noteTestList[index].title = title;
  }
  if (text) {
    noteTestList[index].text = text;
  }

  res.status(201).json(noteTestList[index]);
});

// delete note
router.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = noteTestList.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).send({ error: "Nothing to delete." });
  }

  noteTestList.splice(index, 1)[0];

  res.status(200).send("Note deleted successfully");
});

// read note
router.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = noteTestList.find((note) => note.id === id);

  if (!note) {
    return res.status(404).send({ error: "Note #" + id + " not found." });
  }

  res.status(200).json(note);
});
