// Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const userSchema = new Schema({
    'userid':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true},
});
const UserModel = connection.model('subscribers', userSchema);
module.exports = UserModel;