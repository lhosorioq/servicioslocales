import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const AdminSchema = new Schema({
    nombre: { type: String, required: true, max: 40 },
    user: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 15, select: false },
    rol: { type: String, required: true, max: 15 },
});

// Encrypta contraseña
AdminSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Compara contraseña ingresada con base de datos
AdminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Exportar modelo
export default model('admin', AdminSchema);

