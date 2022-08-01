
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username required'
        },
        
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password required'
        },
        
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);



let options = ({ missingPasswordError: 'Wrong or Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);