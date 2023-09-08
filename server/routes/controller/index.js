const connection = require('../../database/db')

// ---------------------APIS--------------------------------------//

const createTodo = async (req, res) => {
  if (!req.body.data) return res.send({ message: " empty todo not acceptable" })
  let sql = `INSERT INTO todo.todo_table(todo, created) VALUES ("${req.body.data.todo}", "${req.body.data.created}");`
  connection.query(sql, (err, result) => {
    if (err) res.status(500).send(err)
    res.status(200).send(result)
  })
};


const getTodo = async (req, res) => {
  let sql = "SELECT * FROM todo.todo_table"
  connection.query(sql, (err, result) => {
    if (err) res.status(500).send(err)
    res.status(200).send(result)
  })
};


const deleteTodo = async (req, res) => {
  if (!req.params.id) return res.status(400)

  let sql = `DELETE FROM todo.todo_table WHERE id="${req.params.id}";`
  connection.query(sql, (err, result) => {
    if (err) res.status(500).send(err)
    res.status(200).send(result)
  })
};

module.exports = { createTodo, getTodo, deleteTodo }
