const express = require('express');
const {addCard,editCard,deleteCard,listCard} = require('../controllers/cardController');

const router = express.Router();

// POST Router for Add new Card
router.route('/add').post(addCard);
router.route('/edit/:id').put(editCard);
router.route('/delete/:id').delete(deleteCard);


router.route('/list').get(listCard);

module.exports = router;