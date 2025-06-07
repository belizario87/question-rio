// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/QuestionController');

router.get('/', QuestionController.list);
router.get('/salvarpergunta', (req, res) => res.render('pergunta'));
router.post('/salvarpergunta', QuestionController.create);

module.exports = router;
