const Course = require('../models/Course');

// Get All Courses
exports.getCourses = async (req, res, next) => {
  try {
    await Course.findAll().then(courses => res.json({ courses }));
  } catch (err) {
    next(err);
  }
};

// get Single Course
exports.getSingleCourse = async (req, res, next) => {
  try {
    await Course.findByPk(req.params.id).then(course => {
      res.json({ course });
    });
  } catch (err) {
    next(err);
  }
};
