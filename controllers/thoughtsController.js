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

            if (!thoughts) {
                return res.status(404).json({ mesage: 'no thought with that id'});
            }

            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try{
            const thoughts = await Thoughts.create(req.body);
            const user = await user.findOneAndUpdate(
                { _id: req.body.userId},
                { $push: {thoughts: thoughts._id} },
                { new: true }
            );

            if(!user) {
                return res
                .status(404)
                .json({ message: 'thought created, but no users with this ID' });
            }

            res.json({ message: 'thought created'});
        } catch (err) {
            console.error(err)
        }
    },

    async updateThought(req, res) {
        try{
            const thoughts = await Thoughts.findByIdAndUpdate(
                { _id: req.body.id},
                { $set: req.body},
                { runValidators: true, new: true}
            );
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete route with help from greg
    async deleteThoughts(req, res){
        try {
            const thoughts = await Thoughts.findByIdAndDelete(
                {_id: req.params.id},
                { $pull: {thoughts: req.params.id}},
                { new: true}
            );
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addReaction(req, res) {
        try{
            const reaction = await Thoughts.findByIdAndUpdate(
                { _id: req.params.thoughtsId},
                { $push: {reactions: req.body}},
                { runValidators: true, new: true}
            );
            res.status(200).json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try{
            const reaction = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtsId},
                { $pull: {reactions: {id: req.params.Id}}},
                { runValidators: true, new: true}
            );
            res.status(200).json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
