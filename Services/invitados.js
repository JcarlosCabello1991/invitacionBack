import express from 'express';
import Invitado from './InvitadosSchema.js';

const invitados = express.Router();

invitados.post('/invitado', async (req, res) => {
  try {
    //Encontrar el usuario segun el nombre de usuario recibido
    const data = req.body;
    const nombreInvitado = data.invitados;
    const asistenciaInvitado = data.asistencia;
    const asistenciaPrebodaInvitado = data.asistenciaPreboda;
    const cancionInvitado = data.cancionSugerida;
    const intoleranciasInvitado = data.intolerancias;
    const busInvitado = data.bus;
    const hotelInvitado = data.hotel;

    //Creamos el invitado con todos los campos
    const createInvitado = await Invitado.create({
      nombre: nombreInvitado,
      asistencia: asistenciaInvitado,
      asistenciaPreboda: asistenciaPrebodaInvitado,
      cancionSugerida: cancionInvitado,
      intolerancias: intoleranciasInvitado,
      bus: busInvitado,
      hotel: hotelInvitado
    });

    if(!!createInvitado){
      // res.status(200).json({error: false, message: "exito"});
      res.send(JSON.stringify({error: false, message: "exito"}))
    }else{
      res.send(JSON.stringify({error: false, message: "error"}))
    }
  } catch (error) {
    res.send(JSON.stringify({error: false, message: "error"}))
  }
});

invitados.get('/invitados', async(req, res) => {

  //Ahora obtener el user con este id y devolvemos el menu
  //este id puede ser admin o guest por lo que sino esta en uno hay que buscar en otro
  try {
    let user = await Invitado.find({});

    if(!!user){
      let result = {error: false, message: user}
      res.send(JSON.stringify(result))
    }else{
      // res.status(400).json({error: true, message: "error"});
      res.send(JSON.stringify({error: false, message: "error"}))
    }
  } catch (error) {
    res.send(JSON.stringify({error: false, message: "error"}))
  }  
})

export default invitados;