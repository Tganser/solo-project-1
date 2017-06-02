var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Mongoose Schema
var JournalSchema = new Schema({
    journal: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Journal', JournalSchema);
