const { Schema, Types} = require('mongoose');
// https://mongoosejs.com/docs/schematypes.html#objectids
const reactionSchema = new Schema(
    {
      reactionId: {
          type: Schema.Types.ObjectId,
          default: new Types.ObjectId()
      },
      createdAt: {
          type: Date,
          default: Date.now,
          get: date => {return (new Date).toUTCString()}
      },
      username: {
          type: String, 
          require: true 
      },
      reactionBody:{
        type: String, 
        require: true, 
        maxlength: 280 },
    },
);

module.exports = reactionSchema;