const thought = require('../models/');

module.exports = {
    async getThought(req, res) {
        try{
            const thoughts = await thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try{
            const thought = await thought.findOne({ _id: req.params.thoughtId})
            .select('-__v');

            if (!thought) {
                return res.status(404).json({ mesage: 'no thought with that id'});
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try{
            const dbThoughtData = await thought.create(req.body);
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};