import * as TYPES from './types'

const INITIAL_STATE = {
    tasks: JSON.parse(localStorage.getItem('tasks'))

};

export default function taskReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        //Create New Task
        case TYPES.CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { id: state.tasks.length + 1, task: action.payload, completed: false }]
            };

        //Delete Task
        case TYPES.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)

            };

        //Update Task
        case TYPES.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.id === Number(action.payload.id) ? { ...task, task: action.payload.newTask } : { ...task };
                })
            };

        //Toggle Task
        case TYPES.Toggle_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.id === Number(action.payload) ? { ...task, completed: !task.completed } : { ...task };
                })

            };
        default:
            return state;
    }
}

