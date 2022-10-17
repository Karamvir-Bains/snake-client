const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let user = connect();
setupInput(user);