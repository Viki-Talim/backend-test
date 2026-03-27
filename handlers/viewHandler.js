const Academy = require("../pkg/academy/academySchema");
const Course = require("../pkg/course/courseSchema");

exports.getLoginForm = (req, res) => {
  try {
    res.status(200).render("login", {
      naslov: "Login forma",
    });
  } catch (err) {
    res.status(500).send("Error");
  }
};
exports.viewallcourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("akademija");
    res.status(200).render("viewAllCourses", {
      status: "success",
      naslov: "Backend courses",
      courses,
    });
  } catch (err) {
    res.status(500).send("Error");
  }
};
exports.getTestPage = (req, res) => {
  res.render("testView", {
    naslov: "Тест за backend развој на софтвер",
  });
};
exports.oneCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send("Kursot ne e pronajden");
    }
    res.status(200).render("viewOneCourse", {
      ime: course.ime,
      course,
    });
  } catch (err) {
    res.status(500).send("Error");
  }
};
