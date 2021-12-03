import jwt from 'jsonwebtoken';
import config from '../config';

export async function verifyToken (req, res, next) {
    try {
        // Toma el token de las cabeceras
        const token = req.headers.authorization.split(' ')[1];

        // Decodificando token
        const decoded = await jwt.verify(token, config.secret);
        
        // Se guarda el token en el objeto request usado en las ruta
        req.uderId = decoded.id
        next();

    } catch (error) {
        res.status(401).json({
            aut: false,
            mensaje: 'No se ha proporcionado un token valido'
        })
    }
}