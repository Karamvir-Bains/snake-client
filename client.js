const net = require("net");
const { IP, PORT, PLAYER_NAME } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Logs incoming data from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // On connection. Notify the client and send the client name to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${PLAYER_NAME}`);
  });

  return conn;
};

module.exports = {
  connect
};