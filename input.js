// Stores the active TCP connection object.
let connection;
let { USER_CONTROLS } = require("./constants");

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  
  for (const i in USER_CONTROLS) {
    if (key === USER_CONTROLS[i].keybind) {
      const keyPress = USER_CONTROLS[i].keybind;
      const direction = USER_CONTROLS[i].direction;
      const message = USER_CONTROLS[i].message;
      if (direction !== undefined) {
        console.log(keyPress);
        connection.write(`Move: ${direction}`);
      } else {
        console.log(keyPress);
        connection.write(`Say: ${message}`);
      }
    }
  }
};

module.exports = {
  setupInput
};