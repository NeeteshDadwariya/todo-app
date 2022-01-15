var express = require('express');
const {getAllTodos, createTodo, completeTodo, deleteTodo} = require("./todo-service");
var router = express.Router();

/* GET todos listing. */
router.get('/get-all-todos', (req, res, next) => {
    res.json({
        status: true,
        data: getAllTodos()
    });
});

router.put('/add-todo', (req, res, next) => {
    if (req.body && req.body.text && req.body.text.length > 0) {
        let success = createTodo(req.body.text);
        if (success) {
            res.json({
                status: true,
                data: getAllTodos()
            });
        } else {
            //Server error
            res.status(500).send('Unable to add todo');
        }
    } else {
        //Bad Request
        res.status(400).send('Invalid request for add-todo');
    }
});

router.post('/complete-todo/:todo_id', (req, res, next) => {
    let success = completeTodo(req.params.todo_id);
    if (success) {
        res.json({
            status: true,
            data: getAllTodos()
        });
    } else {
        //Server error
        res.status(500).send('Unable to complete given todo');
    }
});

router.delete('/delete-todo/:todo_id', (req, res, next) => {
    let success = deleteTodo(req.params.todo_id);
    if (success) {
        res.json({
            status: true,
            data: getAllTodos()
        });
    } else {
        //Server error
        res.status(500).send('Unable to delete given todo');
    }
});

module.exports = router;
