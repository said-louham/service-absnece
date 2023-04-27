const mongoose = require('mongoose');
const absance = mongoose.model('absance',{
    idStagiaire:{
        type:String,
        require:true
    },
    DateDebut:{
        type:Date,
        require:true
    },
    DateFin:{
        type:Date,
        require:true
    },
    Justification:{
        type:String,
        default:'Non justifier'
    }
})
module.exports = absance;