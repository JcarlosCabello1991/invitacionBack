import mongoose from 'mongoose';

// Definir el esquema de usuario
const invitadosSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  asistencia: { type: String, required: true },
  asistenciaPreboda: { type: String , required: true},
  cancionSugerida: { type: String , required: true},
  intolerancias: { type: String , required: true},
  busIda: { type: String , required: true},
  busVuelta: { type: String , required: true}
},{
  versionKey: false
});

// Crear el modelo de usuario
const Invitado = mongoose.model('invitados', invitadosSchema, 'invitados');

// Exportar el modelo de usuario
export default Invitado;
