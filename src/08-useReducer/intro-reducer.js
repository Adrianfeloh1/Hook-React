

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

// El reducer es una simple función que recive dos argumentos
// el estado inicial y la acción que queremos hacer dentro del estado
const todoReducer = (state = initialState, action = {})=> {

    if (action.type === '[TODO] add todo') {
        return [ ...state, action.payload ]
    }

//siempre tiene que retornar un stado
return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra oja de poder',
    done: false,
}
// el newTodo se lo debo enviar a mi estado para tener de nuevo los 2 todos. no se debe usar .push
// así luce el action
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer (todos, addTodoAction);

console.log({state: todos})