const express = require('express');
const router = express.Router();
const problemController = require('../../controllers/problem.controller');

router.get('/ping', problemController.pingProblemController);
router.get('/', problemController.getProblems);
router.get('/:id', problemController.getProblem);
router.post('/', problemController.addProblem);
router.put('/:id', problemController.updateProblem);
router.delete('/:id', problemController.deleteProblem);

module.exports = router;
