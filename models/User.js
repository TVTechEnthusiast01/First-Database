const mongoose = require ('mongoose')

const User = mongoose.model('users', {

Email: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
},

Password: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
},

isActive: {
    type: Number,
    default: 0 
}

});

module.exports = User; 