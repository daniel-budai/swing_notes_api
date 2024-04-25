require("dotenv").config();

const express = require("express");
const app = express();

const userRouter = require("./Routes/userRoutes");
const notesRouter = require("./Routes/noteRoutes");

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);

/*app.get("/", (req, res) => {
  res.send("Hello, world!");
}); */
/*const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || "localhost"; */

app.listen(process.env.PORT, process.env.BASE_URL, () => {
  console.log(
    `server running at http://${process.env.BASE_URL}:${process.env.PORT}`
  );
});
