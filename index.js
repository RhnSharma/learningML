//Imprting brain.js library

const brain = require("brain.js");

//creating a neural network

const network = new brain.NeuralNetwork();

//Trainig the neural network

network.train([
  { input: [0, 0, 0], output: [0] },
  { input: [0, 0, 1], output: [0] },
  { input: [0, 1, 1], output: [0] },
  { input: [1, 0, 1], output: [1] },
  { input: [1, 1, 1], output: [1] }
]);
//Runnig test for prediction of output

const result = network.run([0, 1, 0]);

console.log(`Prob: ${result}`);
