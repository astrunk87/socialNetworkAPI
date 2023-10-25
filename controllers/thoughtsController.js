const Thoughts = require('../models/thoughts');

module.exports = {
    async getThought(req, res) {
        try{
            const thoughts = await Thoughts.find();
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try{
            const thoughts = await Thoughts.findOne(
                { _id: req.params.thoughtsId})
            .select('-__v');

            if (!thoughts) {
                return res.status(404).json({ mesage: 'no thought with that id'});
            }

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try{
            const dbThoughtsData = await Thoughts.create(req.body);
            res.json(dbThoughtsData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
