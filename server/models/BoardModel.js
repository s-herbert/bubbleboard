const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boardSchema = new Schema ({
  googleId: {type: String, required: true},
  boardInput: Schema.Types.Mixed,
  name: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('Board', boardSchema);
