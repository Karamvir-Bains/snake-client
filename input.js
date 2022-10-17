// Stores the active TCP connection object.
let connection;

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
  // Keys
  if (key === "w") {
    console.log("W Key");
    connection.write("Move: up");
  } else if (key === "a") {
    console.log("A Key");
    connection.write("Move: left");
  } else if (key === "s") {
    console.log("S Key");
    connection.write("Move: down");
  } else if (key === "d") {
    console.log("D Key");
    connection.write("Move: right");
  } else if (key === "1") {
    connection.write("Say: Wow");
  } else if (key === "2") {
    connection.write("Say: OMG!");
  } else if (key === "3") {
    connection.write("Say: Close");
  } else if (key === "4") {
    connection.write("Say: GG!");
  } else if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput
};