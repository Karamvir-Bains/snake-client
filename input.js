// Stores the active TCP connection object.
let connection;
let { USER_CONTROLS } = require("./constants");

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

  // If the key is a user control do the assigned action.
  for (const i in USER_CONTROLS) {
    if (key === USER_CONTROLS[i].keybind) {
      const moveDirection = USER_CONTROLS[i].direction;
      const message = USER_CONTROLS[i].message;

      if (moveDirection) connection.write(`Move: ${moveDirection}`);
      if (message) connection.write(`Say: ${message}`);
    }
  }
};

module.exports = {
  setupInput
};