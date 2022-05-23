const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
// Schema to create User model
const userSchema = new Schema(
  {
    username: {type: String, require: true, unique: true, trim: true },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        lowercase: true,
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [{ 
        type: Schema.ObjectId, 
        ref: 'Thought' }],
    friends:[{ 
        type: Schema.ObjectId, 
        ref: 'User' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });
const User = model('user', userSchema);

module.exports = User;