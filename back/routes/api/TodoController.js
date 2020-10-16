var express = require('express');
var router = express.Router();
const TodoDao = require('../../model/mysql/TodoDao');

router.post('/deleteTodo', async (req, res) => {
  try {
    const data = {
      todoItemIndex: req.body.todoItemIndex,
      todoIndex: req.body.todoIndex
    };

    let rows = await TodoDao.deleteTodo(data);
    if (rows) {
      //온경우
      return res.json({ message: 'success', status: 200, data: rows });
    } else {
      console.log('error');
    }
  } catch (e) {
    console.log('error ', e);
  }
});

router.post('/editTodo', async (req, res) => {
  try {
    const data = {
      todoItemIndex: req.body.todoItemIndex,
      todoIndex: req.body.todoIndex,
      title: req.body.title,
      descTodo: req.body.descTodo,
      isDone: req.body.isDone
    };

    let rows = await TodoDao.editTodo(data);
    if (rows) {
      //온경우
      return res.json({ message: 'success', status: 200, data: rows });
    } else {
      console.log('error');
    }
  } catch (e) {
    console.log('error ', e);
  }
});

router.post('/addTodo', async (req, res) => {
  try {
    const data = {
      todoIndex: req.body.todoIndex,
      title: req.body.title,
      descTodo: req.body.descTodo,
      isDone: req.body.isDone
    };
    let rows = await TodoDao.addTodo(data);
    if (rows) {
      //온경우
      return res.json({ message: 'success', status: 200, data: rows });
    } else {
      console.log('error');
    }
  } catch (e) {
    console.log('error ', e);
  }
});

router.post('/getTodo', async (req, res) => {
  try {
    const data = {
      todoNum: req.body.todoNum
    };
    let rows = await TodoDao.getTodo(data);
    if (rows) {
      //온경우
      return res.json({ message: 'success', status: 200, data: rows });
    } else {
      console.log('error');
    }
  } catch (e) {
    console.log('error ', e);
  }
});
module.exports = router;
