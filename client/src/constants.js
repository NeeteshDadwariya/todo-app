const BE_SERVER = 'https://neetesh-todo.herokuapp.com';
// DEV mode
// const BE_SERVER = 'http://localhost:3000';

export const API_PATHS = {
    GET_ALL_TODOS: `${BE_SERVER}/api/get-all-todos`,
    COMPLETE_TODO: `${BE_SERVER}/api/complete-todo/{todo_id}`,
    DELETE_TODO: `${BE_SERVER}/api/delete-todo/{todo_id}`,
    ADD_TODO: `${BE_SERVER}/api/add-todo`
}