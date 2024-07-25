'use strict';

// var questionModel = require('../database').models.question;

var questionPool = [{
  question: "What is Javascript?",
  answer: "A",
  options: { A: "Programming language", B: "Framework", C: "Tool", D: "Device" }
}, {
  question: "What is Nodejs?",
  answer: "B",
  options: { A: "Language", B: "Javascript framework", C: "Storage", D: "None" }
}, {
  question: "What is Angular?",
  answer: "A",
  options: { A: "Frontend framework", B: "Backendend framework", C: "Tool", D: "Database" }
}, {
  question: "What is MongoDB?",
  answer: "D",
  options: { A: "Frontend framework", B: "Backendend framework", C: "Tool", D: "Database" }
}, {
  question: "Which one is Nodejs framework from the following?",
  answer: "C",
  options: { A: "Django", B: "Springboot", C: "ExpressJs", D: "Gradle" }
}];

var getQuestionNumber = function(num, callback) {
  num = num % questionPool.length;
  return callback(null, questionPool[num]);
}

module.exports = {
  getQuestionNumber
};