const { User, Thought } = require('../models');
module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Get a user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a user
    deleteUsers(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : Thought.deleteMany({ _id: { $in: user.thought } })
        )
        .then(() => res.json({ message: 'user and thought deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUsers(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // add a Friends
    addFriends(req, res) {
        friends.create(req.body)
        .then((friends) => res.json(friends))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // delete a Friends
    deleteFriends(req, res) {
        friends.findOneAndDelete({ _id: req.params.friendId })
        .then((friends) =>
          !friends
            ? res.status(404).json({ message: 'No user with that ID' })
            : Thought.deleteMany({ _id: { $in: user.thought } })
        )
        .then(() => res.json({ message: 'Friends deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
  };