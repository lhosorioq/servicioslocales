import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema({
    nombre: { type: String, required: true, max: 40 },
    email: { type: String, required: true, max: 40 },
    password: { type: String, required: true, max: 40, select: false },
    ciudad: { type: String, required: true, max: 40 },
    departamento: { type: String, required: true, max: 40 },
    direccion: { type: String, required: true, max: 40 },
    telefono: { type: String, required: true, max: 40 },
    avatar: { data: Buffer, contentType: String },
}); // Pendiente definir campos de usuario 

// Encrypta contraseña
usuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Compara contraseña ingresada con base de datos
usuarioSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Exportar modelo
export default model('usuarios', usuarioSchema);
