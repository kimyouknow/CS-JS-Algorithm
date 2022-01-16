const { SingleLinkedList } = require("./linkedList.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function handleExit(line) {
  if (line === "exit") {
    console.log("bye");
    rl.close();
  }
}

function getInput(line) {
  return line.split(" ");
}

function handleInput(SLL, order, value) {
  switch (order) {
    case "add":
      SLL.add(value);
      break;
    default:
      break;
  }
}
function init() {
  rl.setPrompt("> ");
  rl.prompt();
  const SLL = new SingleLinkedList();
  rl.on("line", function (line) {
    handleExit(line);
    const [order, value] = getInput(line.trim());
    handleInput(SLL, order, value);
    SLL.show();
  }).on("close", function () {
    process.exit();
  });
}

if (rl) {
  init();
}
