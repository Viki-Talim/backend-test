const express = require("express");
const db = require("./pkg/db/index");
const courseHandler = require("./handlers/course");
const academyHandler = require("./handlers/academy");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.init();
// CRUD akademija
app.get("/academy",academyHandler.getAll);
app.post("/academy",academyHandler.create);
app.patch("/academy/:id",academyHandler.update);
app.delete("/academy/:id",academyHandler.delete);
// CRUD kursevi
app.get("/course", courseHandler.getAll);
app.post("/course",courseHandler.create);
app.patch("/course/:id",courseHandler.update);
app.delete("/course/:id",courseHandler.delete);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start a service");
  }
  console.log(`Service started successfully ${process.env.PORT}`);
});
