const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };


  const todos = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: true },
  ];
  

const Lab5 = (app) => {
    app.get("/a5/todos/:id/title/:title", (req, res) => {
        const { id, title } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = title;
        res.json(todos);
      });
    
    app.get("/a5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        const todoIndex = todos.indexOf(todo);
        if (todoIndex !== -1) {
          todos.splice(todoIndex, 1);
        }
        res.json(todos);
      });
    
    app.get("/a5/todos/create", (req, res) => {
        const newTodo = {
          id: new Date().getTime(),
          title: "New Task",
          completed: false,
        };
        todos.push(newTodo);
        res.json(todos);
      });
    
    app.get("/a5/todos", (req, res) => {
        const { completed } = req.query;
        if (completed !== undefined) {
          const completedBool = completed === "true";
          const completedTodos = todos.filter(
            (t) => t.completed === completedBool);
          res.json(completedTodos);
          return;
        }
    
        res.json(todos);
      });

      app.get("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
      });
    

      app.get("/a5/todos/:id/completed/:completed", (req, res) => {
        const { id, completed } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo) {
          // Convert 'completed' parameter to boolean and update the todo item
          todo.completed = completed === 'true';
          res.json(todos);
        } else {
          res.status(404).send(`Todo with ID ${id} not found.`);
        }
      });
      
      app.get("/a5/todos/:id/description/:description", (req, res) => {
        const { id, description } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo) {
          // Update the todo item's description
          todo.title = description; // Assuming 'title' is being used as the 'description'
          res.json(todos);
        } else {
          res.status(404).send(`Todo with ID ${id} not found.`);
        }
      });
      
    
    
    app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });    

    
    app.get("/a5/welcome", (req, res) => {
      res.send("Welcome to Assignment 5");
    });
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
      });

      app.get("/a5/multiply/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const product = parseInt(a) * parseInt(b);
        res.send(product.toString());
      });
    
      app.get("/a5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        // Check if b is not zero to avoid division by zero
        if (parseInt(b) === 0) {
          res.send("Cannot divide by zero");
        } else {
          const quotient = parseInt(a) / parseInt(b);
          res.send(quotient.toString());
        }
      });

      app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });
    
    
      app.get("/a5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result;
        switch (operation) {
          case "add":
            result = parseInt(a) + parseInt(b);
            break;
          case "subtract":
            result = parseInt(a) - parseInt(b);
            break;
          case "multiply":
            result = parseInt(a) * parseInt(b);
            break;
          case "divide":
            // Check if b is not zero to avoid division by zero
            if (parseInt(b) === 0) {
              result = "Cannot divide by zero";
            } else {
              result = parseInt(a) / parseInt(b);
            }
            break;
          default:
            result = "Invalid operation";
        }
        res.send(result.toString());
      });
    
  };
  export default Lab5;
  
  