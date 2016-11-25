var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    content: {type: String, required: true}, // defines how this should look like
    user: {type: Schema.Types.ObjectId} // internal type mongoose uses to store IDs of different objects
                                        // we store in the database, ID automatically created
});

module.exports = mongoose.model('Message', schema); // constructor expects name of this model as
                                                    // well as the schema we want to use, automatically creates
                                                    // collection called 'messages'