var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var FeelingSchema = new Schema({
    feeling: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Feeling', FeelingSchema);
