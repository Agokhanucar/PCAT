const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
router.get('/add', projectController.getAddProject);
router.post('/add', projectController.postAddProject);
router.get('/edit/:id', projectController.getEditProject);
router.post('/edit/:id', projectController.postEditProject);

module.exports = router; 