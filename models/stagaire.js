const mongoose = require('mongoose');
const stagaire = mongoose.model('stagaire',{
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        require:true
    },
    CNI:{
        type:String,
        require:true
    },
    DNS:{
        type:Date,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    Tel:{
        type:String,
        require:true
    },
    filiere:{
        type:Object,
        require:true
    },
    groupe:{
        type:Object,
        require:true
    },
})
module.exports = stagaire;