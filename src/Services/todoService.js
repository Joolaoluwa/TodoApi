import fs from "fs";

export let createTodoService = (body) => {
  let todos = [];
  let saveData = fs.readFile("./src/todo.json", "utf-8", (err, data) => {
    if (err) console.log(err);

    // Parsed data
    if (data.length === 0) {
      todos.push(body);
    } else {
      todos = JSON.parse(data);
      // push the data to an array
      todos.push(body);
    }
    fs.writeFile("./src/todo.json", JSON.stringify(todos, null, 2), (err) => {
      if (err) {
        console.log(err);
      } else console.log("Successfully written to file");
    });
  });
  return JSON.stringify(todos);
};
