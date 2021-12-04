import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const emprendedorSchema = new Schema({
    nombre: { type: String, required: true, max: 40 },
    mail: { type: String, required: true, max: 40 },
    password: { type: String, required: true, max: 40, select: false },
    ciudad: { type: String, required: true, max: 40 },
    departamento: { type: String, required: true, max: 40 },
    direccion: { type: String, required: true, max: 40 },
    telefono1: { type: String, required: true, max: 40 },
    telefono2: { type: String, max: 40 },
    actividad: { type: String, required: true, max: 40 },
    msg_description: { type: String, required: true, max: 300 },
    visible: { type: Boolean, required: true, default: false },
    img: { data: Buffer, contentType: String },
    likes: { type: Number, default: 0 },
    doesnotlikes: { type: Number, default: 0 },
    telegram: { type: String, max: 40 },
    whatsapp: { type: String, max: 40 },
    twitter: { type: String, max: 40 },
    facebook: { type: String, max: 40 },
    linkedin: { type: String, max: 40 },
    instagram: { type: String, max: 40 },
});

// Encrypta contraseña
emprendedorSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Compara contraseña ingresada con base de datos
emprendedorSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Exportar modelo
export default model('proveedores', emprendedorSchema);
