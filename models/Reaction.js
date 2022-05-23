const { Schema, Types} = require('mongoose');
// https://mongoosejs.com/docs/schematypes.html#objectids
const reactionSchema = new Schema(
    {
      reactionId: {
          type: Schema.Types.ObjectId,
          default: new Types.ObjectId()
      },
      reactionBody:{
        type: String, 
        require: true, 
        maxlength: 280 
      },
      username: {
        type: String, 
        require: true 
      },   
      createdAt: {
          type: Date,
          default: Date.now,
          get: date => {return (new Date).toUTCString()}
      },
    },
);

module.exports = reactionSchema;