const express = require('express');
const ProblemController = require('../../controllers/problem.controller');

const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingController);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.delete('/:id', ProblemController.deleteProblem);
problemRouter.put('/:id', ProblemController.updateProblem);

module.exports = problemRouter;
