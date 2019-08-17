const router = require('express').Router();
// Import product controller
const courseController = require('../controllers/course');
const auth = require('../controllers/auth');

// Get all Courses
router.get('/', courseController.getCourses);

// Get Single Course
router.get('/:id', courseController.getSingleCourse);

// router.post('/', courseController.addCourse);

module.exports = router;
