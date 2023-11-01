// the start of this file pulled from class work

const User = require('../models/user');

module.exports = {
  async getUsers(req, res) {
    try {
      const user = await User.find();
      // .populate({path: "thoughts", select: "-__v"});
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id })

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id},
        { $set: req.body},
        { new:true, runValidators: true }
      )
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async deleteUser(req, res){
    try {
        const user = await User.findOneAndDelete(
            {_id: req.params.id}
        )
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId});
      const friend = await User.findOne({ _id: req.params.friendId});
      if(!user.friends.includes(friend._id) || !friend.friends.includes(user._id)) {
        const newFriend = await User.findOneAndUpdate(
          { _id: req.params.userId},
          { $push: {friends: req.params.friendId}},
          { new: true}
        )

        const userFriend = await User.findOneAndUpdate(
          { _id: req.params.friendId},
          { $push: {friends: req.params.userId}},
          { new:true}
        )
        res.status(200).json(newFriend, userFriend)
      } else {
        res.status(200).json({ message: 'You are already friends'})
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
   async deleteFriend(req, res) {
    try {
        const removeFriend = await User.findOneAndUpdate(
          { _id: req.body.userId},
          { $pull: {friends: req.params.friendId}},
          { new:true}
        )
        const removeUserFriend = await User.findOneAndUpdate(
          { _id: req.body.friendId},
          { $pull: {friends: req.params.userId}},
          { new: true}
        )
        res.status(200).json(removeFriend, removeUserFriend)
    } catch (err) {
      res.status(500).json(err)
    }
   }
};
