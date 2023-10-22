const router = require('express').Router();
const {
    getSingleThought,
    getThought,
    createThought,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtsId').get(getSingleThought);

module.exports = router;