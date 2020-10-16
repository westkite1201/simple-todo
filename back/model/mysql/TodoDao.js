const dbHelpers = require('./mysqlHelpersPromise');
const _ = require('lodash');
/* mysql2 모듈을 이용한 Query */
const deleteTodo = async (parameter) => {
  console.log(parameter);
  const { todoItemIndex, todoIndex } = parameter;
  let deleteTodoQuery = `
  DELETE FROM TODO_ITEM 
  WHERE TODO_ITEM_INDEX = ?
  `;
  try {
    const connection = await dbHelpers.pool.getConnection(async (conn) => conn);
    try {
      //await connection.beginTransaction(); // START TRANSACTION
      let [deleteTodoRaw] = await connection.query(deleteTodoQuery, [
        todoItemIndex
      ]);

      let getTodoQuery = `
      SELECT TODO_ITEM_INDEX AS todoItemIndex, 
            TITLE AS title, 
            DESC_TODO as descTodo,
            IS_DONE as isDone
      FROM TODO_ITEM
      WHERE TODO_INDEX = ?
        `;

      let [todoRaw] = await connection.query(getTodoQuery, [todoIndex]);
      await connection.commit(); // COMMIT
      connection.release();
      console.log('success Query SELECT');
      console.log('[SEO] todoRaw ', todoRaw);
      return todoRaw;
    } catch (err) {
      await connection.rollback(); // ROLLBACK
      connection.release();
      console.log('Query Error', err);
      return false;
    }
  } catch (err) {
    console.log('DB Error');
    return false;
  }
};

const editTodo = async (parameter) => {
  console.log(parameter);
  const { todoIndex, todoItemIndex, title, descTodo, isDone } = parameter;
  let editTodoQuery = `
  UPDATE TODO_ITEM 
  SET  TITLE =?,
       DESC_TODO =?,
       IS_DONE = ?
  WHERE TODO_ITEM_INDEX = ?`;
  try {
    const connection = await dbHelpers.pool.getConnection(async (conn) => conn);
    try {
      //await connection.beginTransaction(); // START TRANSACTION
      let [editTodoRaw] = await connection.query(editTodoQuery, [
        title,
        descTodo,
        isDone,
        todoItemIndex
      ]);

      let getTodoQuery = `
      SELECT TODO_ITEM_INDEX AS todoItemIndex, 
            TITLE AS title, 
            DESC_TODO as descTodo,
            IS_DONE as isDone
      FROM TODO_ITEM
      WHERE TODO_INDEX = ?`;

      let [todoRaw] = await connection.query(getTodoQuery, [todoIndex]);
      await connection.commit(); // COMMIT
      connection.release();
      console.log('success Query SELECT');
      console.log('[SEO] todoRaw ', todoRaw);
      return todoRaw;
    } catch (err) {
      await connection.rollback(); // ROLLBACK
      connection.release();
      console.log('Query Error', err);
      return false;
    }
  } catch (err) {
    console.log('DB Error');
    return false;
  }
};
const addTodo = async (parameter) => {
  console.log(parameter);
  const { todoIndex, title, descTodo, isDone } = parameter;
  let addTodoQuery = `REPLACE INTO TODO_ITEM(TODO_INDEX, TITLE, DESC_TODO, IS_DONE) VALUES (?, ?, ?, ?)`;
  try {
    const connection = await dbHelpers.pool.getConnection(async (conn) => conn);
    try {
      //await connection.beginTransaction(); // START TRANSACTION
      let [addTodoRaw] = await connection.query(addTodoQuery, [
        todoIndex,
        title,
        descTodo,
        isDone
      ]);

      let getTodoQuery = `SELECT TODO_ITEM_INDEX AS todoItemIndex, 
            TITLE AS title, 
            DESC_TODO as descTodo,
            IS_DONE as isDone
        FROM TODO_ITEM
        WHERE TODO_INDEX = ?
        `;

      let [todoRaw] = await connection.query(getTodoQuery, [todoIndex]);
      await connection.commit(); // COMMIT
      connection.release();
      console.log('success Query SELECT');
      return todoRaw;
    } catch (err) {
      await connection.rollback(); // ROLLBACK
      connection.release();
      console.log('Query Error', err);
      return false;
    }
  } catch (err) {
    console.log('DB Error');
    return false;
  }
};

const getTodo = async (parameter) => {
  console.log(parameter);
  let todoNum = parameter.todoNum;
  let getTodoQuery = `SELECT TODO_ITEM_INDEX AS todoItemIndex, 
    TITLE AS title, 
    DESC_TODO as descTodo,
    IS_DONE as isDone
    FROM TODO_ITEM
    WHERE TODO_INDEX = ?
    `;
  try {
    const connection = await dbHelpers.pool.getConnection(async (conn) => conn);
    try {
      //await connection.beginTransaction(); // START TRANSACTION
      let [todoRaw] = await connection.query(getTodoQuery, [todoNum]);
      await connection.commit(); // COMMIT
      connection.release();
      console.log('success Query SELECT');
      return todoRaw;
    } catch (err) {
      await connection.rollback(); // ROLLBACK
      connection.release();
      console.log('Query Error', err);
      return false;
    }
  } catch (err) {
    console.log('DB Error');
    return false;
  }
};

module.exports = {
  getTodo: getTodo,
  editTodo: editTodo,
  addTodo: addTodo,
  deleteTodo: deleteTodo
};
