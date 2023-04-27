const mongoose = require('mongoose');
const groupe = mongoose.model('groupe',{
    nom:{
        type:String,
        require:true
    },
    idFiliere:{
        type:String,
        require:true
    }
})
module.exports = groupe;