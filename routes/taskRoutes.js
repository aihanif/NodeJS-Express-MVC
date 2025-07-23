const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.list);
router.post('/add', taskController.add);
router.post('/delete/:id', taskController.delete);
router.get('/edit/:id', taskController.editForm);
router.post('/edit/:id', taskController.update);

module.exports = router; 