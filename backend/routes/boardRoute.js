const express = require('express');
const {addBoard,editBoard,deleteBoard,listBoard} = require('../controllers/boardController');

const router = express.Router();

// POST Route for add Board
router.route('/add').post(addBoard);
router.route('/edit/:id').put(editBoard);
router.route('/delete/:id').delete(deleteBoard);

router.route('/list').get(listBoard);

module.exports = router;