var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('mongoose-unique-validator');
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}, // we installed mongoose-unique-validator
    messages: [{type: Schema.ObjectId, ref: 'Message'}] // messages will only be an array of strings and IDs
                                               // ref tells mongoose it refers to another model
});

schema.plugin(validator); // allows us to use the unique validator

module.exports = mongoose.model('User', schema); // constructor expects name of this model as
                                                // well as the schema we want to use, automatically creates
                                                // collection called 'users'