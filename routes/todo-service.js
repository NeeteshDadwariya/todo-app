const TODO_STATE = {
    OPEN: 'OPEN',
    COMPLETED: 'COMPLETED'
}

//Currently, keeping TODOs only in-memory as persistent storage was out-of-scope. Ideally should go to DB with proper
//transaction management. Using key-value dictionary to quickly access the TODO object by using the key
const todos = {
    'TD00001': {state: TODO_STATE.OPEN, text: 'My First Task'},
    'TD00002': {state: TODO_STATE.OPEN, text: 'Submit ArtSci Full Stack Challenge'},
    'TD00003': {state: TODO_STATE.OPEN, text: 'Submit ArtSci Data Analyst Challenge'},
    'TD00004': {state: TODO_STATE.OPEN, text: 'Become a Proficient Data Scientist'},
};

//The auto increment index of key should be taken care by the DB itself directly.
let AUTO_INDEX = Object.keys(todos).length

const getAllTodos = () => todos

const createTodo = (text) => {
    //Try to add todo
    try {
        const idSuffix = (++AUTO_INDEX).toString()
        const todoID = 'TD' + idSuffix.padStart(5, '0');
        todos[todoID] = {
            state: TODO_STATE.OPEN,
            text
        }
        return true;
    }
        //If todo not added - In practical, if not updated in DB
    catch (error) {
        console.log('Error while adding TODO', error);
        return false;
    }
}

//In real implementation - should be fetching from DB
const findTodoById = (todo_id) => {
    return todos && todos[todo_id];
}

const completeTodo = (todo_id) => {
    const todo = findTodoById(todo_id)
    if (!todo) {
        console.log('TODO not found by given ID:' + todo_id)
        return false
    }

    //Try to update TODO state in DB/In-memory
    //In real DB - It can be done in single query using UPDATE + WHERE combination
    try {
        todo.state = TODO_STATE.COMPLETED;
        return true;
    } catch (error) {
        console.log('Error while completing TODO', error);
        return false;
    }
}

const deleteTodo = (todo_id) => {
    const todo = findTodoById(todo_id)
    if (!todo) {
        console.log('TODO not found by given ID:' + todo_id)
        return false
    }

    //Try to delete TODO state in DB/In-memory
    try {
        delete todos[todo_id]
        return true;
    } catch (error) {
        console.log('Error while deleting TODO', error);
        return false;
    }
}

module.exports = {getAllTodos, createTodo, findTodoById, completeTodo, deleteTodo}