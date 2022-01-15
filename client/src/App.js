import React from "react";
import "./App.css";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Todo} from "./Todo";
import {FormTodo} from "./FormTodo";
import {API_PATHS} from "./constants";


const App = () => {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        fetch(API_PATHS.GET_ALL_TODOS)
            .then(r => r.json())
            .then(body => {
                if (body && body.status) {
                    setTodos(body.data)
                }
            })
    }, [])

    const addTodo = text => {
        fetch(API_PATHS.ADD_TODO, {
            method: 'PUT', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text})
        })
            .then(res => {
                if (!res.ok) throw new Error(res.body);
                return res.json()
            })
            .then(body => {
                if (body && body.status) {
                    setTodos(body.data)
                }
            })
            .catch((error) => {
                alert(error)
            })
    };

    const markTodo = key => {
        fetch(API_PATHS.COMPLETE_TODO.replace('{todo_id}', key), {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok) throw new Error(res.body);
                return res.json()
            })
            .then(body => {
                if (body && body.status) {
                    setTodos(body.data)
                }
            })
            .catch((error) => {
                alert(error)
            })
    };

    const removeTodo = key => {
        fetch(API_PATHS.DELETE_TODO.replace('{todo_id}', key), {
            method: 'DELETE', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok) throw new Error(res.body);
                return res.json()
            })
            .then(body => {
                if (body && body.status) {
                    setTodos(body.data)
                }
            })
            .catch((error) => {
                alert(error)
            })
    };

    try {
        return (<div className="app">
            <div className="container">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormTodo addTodo={addTodo}/>
                <div>
                    {Object.keys(todos).map(key => (<Card key={key}>
                        <Card.Body>
                            <Todo todoId={key}
                                  todo={todos[key]}
                                  markTodo={markTodo}
                                  removeTodo={removeTodo}
                            />
                        </Card.Body>
                    </Card>))}
                </div>
            </div>
        </div>)
    } catch (error) {
        console.log(error);
    }
}

export default App;