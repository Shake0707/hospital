const mongoose = require('mongoose')
const navbatSchema = mongoose.Schema({
    service: {
        type: String,
        trim: true,
        minlength: 5,
        unique: true,
        required: true
    },

    time: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: Number
    },
  
   
    doctor: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.model("navbat", navbatSchema)