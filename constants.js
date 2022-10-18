const IP = "localhost";
const PORT = 50541;
const PLAYER_NAME = "Kb";
const USER_CONTROLS = {
  MOVE_UP_KEY: {
    keybind: "w",
    direction: "up",
  },
  MOVE_LEFT_KEY: {
    keybind: "a",
    direction: "left",
  },
  MOVE_DOWN_KEY: {
    keybind: "s",
    direction: "down",
  },
  MOVE_RIGHT_KEY: {
    keybind: "d",
    direction: "right",
  },
  MESSAGE_1: {
    keybind: "1",
    message: "Wow",
  },
  MESSAGE_2: {
    keybind: "2",
    message: "OMG!",
  },
  MESSAGE_3: {
    keybind: "3",
    message: "Close",
  },
  MESSAGE_4: {
    keybind: "4",
    message: "GG!",
  },
};


module.exports = {
  IP,
  PORT,
  PLAYER_NAME,
  USER_CONTROLS,
};