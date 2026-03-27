const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./pkg/db/index");
const courseHandler = require("./handlers/course");
const academyHandler = require("./handlers/academy");
const auth = require("./handlers/authHandler");
const view = require("./handlers/viewHandler");
// const Course = require("./pkg/course/courseSchema");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");

db.init();

app.post("/api/v1/signup", auth.signup);
app.post("/api/v1/login", auth.login);
// CRUD akademija
app.get("/academy", academyHandler.getAll);
app.post("/academy", academyHandler.create);
app.patch("/academy/:id", academyHandler.update);
app.delete("/academy/:id", academyHandler.delete);
// CRUD kursevi
app.get("/course", courseHandler.getAll);
app.post("/course", auth.protect, courseHandler.create);
app.patch("/course/:id", auth.protect, courseHandler.update);
app.delete("/course/:id", auth.protect, courseHandler.delete);

app.get("/login", view.getLoginForm);
// const povrziKursevi = async () => {
//   const academyId = "69c1a9e7f88ee17230aa6d1b";
//   const kursIds = [
//     "69c1a4f47f6814e53b9bf441",
//     "69c41e8a32b60332184625c7",
//     "69c41ecd32b60332184625ca",
//   ];
//   await Course.updateMany(
//     { _id: { $in: kursIds } },
//     { $set: { akademija: academyId } },
//   );

//   console.log("Kursevite se uspesno povrzani!");
// };
// povrziKursevi();
app.get("/test", view.getTestPage);
app.get("/welcome", view.viewallcourses);
app.get("/welcome/:id", view.oneCourse);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start a service");
  }
  console.log(`Service started successfully ${process.env.PORT}`);
});
