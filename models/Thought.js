const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String, 
        require: true, 
        unique: true, 
        trim: true,
        minlength: 1, 
        maxlength: 280 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String, 
        require: true 
    },
    reactions:[reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });
const Thought = model('thought', thoughtSchema);

module.exports = Thought;