// Stores the active TCP connection object.
let connection;
let currentDirection = "left";
let { USER_CONTROLS, OPPOSITE_DIRECTION } = require("./constants");

// Tracks key presses from client
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Handles key presses from client
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  for (const i in USER_CONTROLS) {
    if (key === USER_CONTROLS[i].keybind) {
      const moveDirection = USER_CONTROLS[i].direction;
      const message = USER_CONTROLS[i].message;

      // Prevents snake from changing direction to backwards
      if (moveDirection !== OPPOSITE_DIRECTION[currentDirection]) {
        currentDirection = moveDirection;
      }

      if (message) connection.write(`Say: ${message}`);
    }
  }
};

// Snake Movement
setInterval(() => {
  connection.write(`Move: ${currentDirection}`);
}, 100);

module.exports = {
  setupInput
};