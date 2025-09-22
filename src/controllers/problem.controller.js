// problem.controller.js

const pingController = (req, res) => {
  return res.json({ message: "problem controller is up" });
};

const getProblems = (req, res) => {
  return res.json({ message: "Get problems controller" });
};

const addProblem = (req, res) => {
  return res.json({ message: "Add problem controller" });
};

const deleteProblem = (req, res) => {
  return res.json({ message: "Delete problem controller" });
};

const updateProblem = (req, res) => {
  return res.json({ message: "Update problem controller" });
};

module.exports = {
  pingController,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
};
