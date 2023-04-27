const express=require('express');
const mongoose=require('mongoose');
const absence=require('./models/absence');
const stagaire=require('./models/stagaire');
const  Port=4006;
//-------------------------------------------------------------------
const  app=express()

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/service-absence", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Service absence DB connecté`);
  });
  
  //--------------------------------index Absence------------------------------------



  //----------------------------------create Absence ---------------------------------

  app.post("/absence/create", async (req, res) => {
    const { idStagiaire, DateDebut, DateFin,justification } = req.body;
    await stagaire.findById(idStagiaire).then((stagaire)=>{
     if(!stagaire){
      return  res.json({message:'Ops ! stagire not exist'})
      }

    })
    const newAbsence = new absence({
      idStagiaire,
      DateDebut,
      DateFin,
      justification,
    });
    newAbsence.save();
    return res.json(newAbsence);
  });
  //----------------------------------show Absence-----------------------------------
  app.get("/absence/:id", async (req, res) => {


  await absence.findById(req.params.id).then(data=>{
    if(!data){
      return res.json({message:'Not found'})
    }
    return res.json({message:data})
  })
  
  })


  //----------------------------------update Absence---------------------------------


  app.put("/absence/:id", async (req, res) => {
    if(!req.body){
      return res.json({
        message: "Les données à mettre à jour ne peuvent pas être vides !",
      })
    }
 await  absence.findByIdAndUpdate(req.params.id,req.body,{ useFindAndModify: false})
  .then((data)=>{
     if(!data){
      return  res.json({message:' Ops !  absence not found '})
    }
    return  res.json({message:'absence updated seccessfully ',
                      updatedAbsence:data,
  })
    })
  
  });
  
app.delete("/absence/:id", async (req, res) => {
  await absence.findByIdAndDelete(req.params.id).then((data) => {
    if (!data) {
      return res.json({ message: "Ops ! absence not found " });
    }
    return res.json({ message: "absence deleted successfully" });
  });
});


//-------------------------------------------------------------------
app.listen(Port,()=>{
    console.log(`server worknig seccessfully on ${Port}`);
})

