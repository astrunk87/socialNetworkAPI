const router = require('express').Router();
const {
    getSingleThought,
    getThought,
    createThought,
    updateThought,
    deleteThoughts,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThought).post(createThought);

router
    .route('/:thoughtsId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThoughts);

router.route('/:thoughtsId/reactions').post(addReaction);

router.route('/:thoughtsId/reactions/:reactionsId').delete(deleteReaction);


module.exports = router;