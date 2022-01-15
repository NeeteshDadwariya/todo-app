const BE_SERVER = 'localhost:3000';

export const API_PATHS = {
    GET_ALL_TODOS: `http://${BE_SERVER}/api/get-all-todos`,
    COMPLETE_TODO: `http://${BE_SERVER}/api/complete-todo/{todo_id}`,
    DELETE_TODO: `http://${BE_SERVER}/api/delete-todo/{todo_id}`,
    ADD_TODO: `http://${BE_SERVER}/api/add-todo`
}