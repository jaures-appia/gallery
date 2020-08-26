const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    titre: {type: String, require: true},
    description: {type: String, require: true},
    photoUrl: {type: String, require: true},
    userId: {type: String, require: true},
    
},
{timestamps: true}
)

module.exports = mongoose.model('Photo', photoSchema)