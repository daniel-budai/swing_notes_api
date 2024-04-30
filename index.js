require("dotenv").config();

const express = require("express");
const app = express();

const userRouter = require("./Routes/userRoutes");
const notesRouter = require("./Routes/noteRoutes");

const setupSwagger = require("./Swagger/swagger.js");
setupSwagger(app);

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);

app.listen(process.env.PORT, process.env.BASE_URL, () => {
  console.log(
    `server running at http://${process.env.BASE_URL}:${process.env.PORT}`
  );
});
