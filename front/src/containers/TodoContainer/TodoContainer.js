import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GET_TODOS_REQUEST,
  TODO_MODAL_OPEN,
  TODO_MODAL_CLOSE
} from '../../modules/todos/reducer';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TodoItem from '../../components/Todo/TodoItem';
import ProgressBar from '../../components/Common/ProgressBar';
import TodoModalContainer from '../TodoModalContainer';
import _ from 'lodash';
import moment from 'moment';
function TodoContainer() {
  const { todosArr, todoModalView } = useSelector((state) => state.todos);
  const [time, setTime] = useState(moment().format('MM월 DD일 HH시 mm분'));
  const dispatch = useDispatch();

  const { data, loading, error } = todosArr;

  const handleAddTodo = () => {
    dispatch({
      type: TODO_MODAL_OPEN,
      payload: {
        todoItemIndex: 0,
        isEdit: false
      }
    });
  };

  const handleClose = () => {
    dispatch({
      type: TODO_MODAL_CLOSE,
      payload: {
        todoItemIndex: 0,
        isEdit: false
      }
    });
  };

  const getTodo = (todoNum) => {
    dispatch({
      type: GET_TODOS_REQUEST,
      payload: todoNum
    });
  };

  /* 시간  */
  const tick = () => {
    setTime(moment().format('MM월 DD일 HH시 mm분'));
  };

  useEffect(() => {
    getTodo(1);
    setInterval(tick, 1000);
  }, []);

  const calcualteProgress = () => {
    if (data && data.length !== 0) {
      let todayTodoCount = data.length;
      let todayTodoDoneCount = data.filter((item) => item.isDone === 1).length;
      return (todayTodoDoneCount / todayTodoCount) * 100;
    }
  };
  return (
    <Fragment>
      <Div>
        <div className="todo-list-wrapper">
          <div className="todo-list-container">
            <div className="todo-date-time">{time}</div>
            <hr />
            <div className="todo-list-content">
              {data &&
                data.map((todo, index) => (
                  <TodoItem
                    todo={todo}
                    index={index}
                    key={todo.todoItemIndex}
                  />
                ))}
            </div>
            <AddCircleOutlineIcon
              style={{ cursor: 'pointer' }}
              onClick={handleAddTodo}
            />
          </div>
        </div>
        <ProgressBar percent={calcualteProgress()} />
      </Div>
      <div>
        <TodoModalContainer
          todoModalView={todoModalView}
          handleClose={handleClose}
        />
      </div>
    </Fragment>
  );
}

const Div = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  .todo-list-wrapper {
    overflow: scroll;
    overflow-x: hidden;
    width: 100%;
    height: 768px;
    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    margin-top: 30px;
    margin-bottom: 32px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    .todo-list-container {
      border-radius: 4px;
      text-align: center;
      transition: width 2s;

      .todo-date-time {
        font-size: 2rem;
      }
      .todo-list-content {
      }
      .todo-today-progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default TodoContainer;
