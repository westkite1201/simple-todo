import produce from 'immer';

export const initialState = {
  todoModalView: false,
  todosArr: [
    {
      loading: false,
      data: [],
      error: null
    }
  ],
  isEdit: false,
  editTodoItemIndex: 0
};

export const GET_TODOS_REQUEST = 'todos/GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'todos/GET_TODOS_FAILURE';

export const TODO_MODAL_OPEN = 'todos/TODOS_MODAL_OPEN';
export const TODO_MODAL_CLOSE = 'todos/TODOS_MODAL_OFF';

export const EDIT_TODO_REQUEST = 'todos/EDIT_TODO_REQUEST';
export const EDIT_TODO_SUCCESS = 'todos/EDIT_TODO_SUCCESS';
export const EDIT_TODO_FAILURE = 'todos/EDIT_TODO_FAILURE';

export const ADD_TODO_REQUEST = 'todos/ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'todos/ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'todos/ADD_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'todos/DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'todos/DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'todos/DELETE_TODO_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case EDIT_TODO_SUCCESS: {
        draft.todosArr = action.payload;
        draft.todoModalView = false;
        break;
      }
      case EDIT_TODO_FAILURE: {
        break;
      }

      case TODO_MODAL_OPEN: {
        draft.todoModalView = true;
        draft.isEdit = action.payload.isEdit;
        draft.editTodoItemIndex = action.payload.todoItemIndex;
        break;
      }
      case TODO_MODAL_CLOSE: {
        draft.todoModalView = false;
        draft.isEdit = false;
        break;
      }

      case GET_TODOS_SUCCESS: {
        draft.todosArr = action.payload;
        break;
      }
      case GET_TODOS_FAILURE: {
        break;
      }

      case ADD_TODO_REQUEST: {
        break;
      }
      case ADD_TODO_SUCCESS: {
        draft.todosArr = action.payload;
        draft.todoModalView = false;
        break;
      }
      case ADD_TODO_FAILURE: {
        break;
      }

      case DELETE_TODO_REQUEST: {
        break;
      }
      case DELETE_TODO_SUCCESS: {
        draft.todosArr = action.payload;
        draft.todoModalView = false;
        break;
      }
      case DELETE_TODO_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};
