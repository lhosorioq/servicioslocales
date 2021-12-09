import Usuario from '../models/usuario.model';
import jwt from 'jsonwebtoken';
import config from '../config';
import path from 'path';

import { Categorias, Departamentos, Ciudades } from '../lib/search.lib';

//Crear Usuario
export const createUsuario = async (req, res) => {
    try {
        const {
            nombre,
            email,
            password,
            direccion,
            ciudad,
            departamento,
            telefono,
        } = req.body;

        let avatar;

        if (req.file) {
            const data = req.file.buffer;
            // const data = req.body.avatar; // Postman
            const contentType = req.file.mimetype;
            // const contentType = req.body.avatar.type; //Postman
            avatar = { data, contentType };
        }

        const usuario = new Usuario({
            nombre,
            email,
            password,
            direccion,
            ciudad,
            departamento,
            telefono,
            avatar,
        });

        const correo = await Usuario.findOne({ email });

        if (correo) {
            res.status(200).json({
                mensaje: 'Ya existe una cuenta con este email',
            });
        } else {
            // Encryptar contraseña
            usuario.password = await usuario.encryptPassword(password);

            // Crea token
            const token = jwt.sign({ id: usuario._id }, config.secret, {
                expiresIn: 60 * 60 * 2, //Expira en 2 horas
            });

            await usuario.save();

            res.status(200).json({
                auth: true,
                mensaje: 'Registro exitoso',
                id: usuario._id,
                token,
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consulta base de datos por email y password Login
export const getUsuarioMailPass = async (req, res) => {
    const usuario = await Usuario.findOne(
        {
            email: req.body.email,
        },
        { avatar: 0 }
    ).select('+password');

    // Verifico si no se encontro el email en base de datos
    if (!usuario) {
        return res.json({ auth: false, mensaje: 'Email no esta registrado' });
    }

    const validPassword = await usuario.comparePassword(
        req.body.password,
        usuario.password
    );

    // Si la validacion de contraseña es incorrecta
    if (!validPassword) {
        return res.json({
            auth: false,
            token: null,
            mensaje: 'Contraseña incorrecta',
        });
    }

    const token = jwt.sign({ id: usuario._id }, config.secret, {
        expiresIn: 60 * 60 * 2,
    });
    res.status(200).json({
        auth: true,
        mensaje: 'Bienvenido ' + usuario.nombre,
        token,
        usuario: usuario,
    });
};

// Consultar base de datos por id de usuario
export const getUsuarioId = async (req, res) => {
    const _id = req.params.id;

    try {
        const register = await Usuario.findOne({ _id }, { avatar: 0 }).select(
            '-password'
        );
        res.json({ auth: true, register });
    } catch (error) {
        return res
            .status(400)
            .json({ auth: true, mensaje: 'Ocurrio un error', error });
    }
};

// Consultar todos los usuarios
export const getUsuariosAll = async (req, res) => {
    try {
        const usuarios = await Usuario.find({}, { avatar: 0 });
        res.status(200).json({
            auth: true,
            usuarios: usuarios,
        });
    } catch (error) {
        return res.status(400).json({
            auth: true,
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Ver imagen avatar de usuario
export const viewImgUsuario = async (req, res) => {
    const _id = req.params.id;

    try {
        const resp = await Usuario.findOne({ _id }, { avatar: 1 });
        res.set('Content-Type', resp.avatar.contentType);
        res.send(resp.avatar.data);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Actualizar un usuario
export const updateUsuario = async (req, res) => {
    const _id = req.params.id;
    const {
        nombre,
        email,
        password,
        direccion,
        telefono,
        departamento,
        ciudad,
    } = req.body;

    let body = {};

    if (req.file) {
        const data = req.file.buffer;
        // const data = req.body.img; // Postman
        const contentType = req.file.mimetype;
        // const contentType = req.body.img.type; //Postman
        const avatar = { data, contentType };

        const usuario = new Usuario({
            nombre,
            email,
            password,
            direccion,
            departamento,
            ciudad,
            telefono,
            avatar,
        });

        if (usuario.nombre !== '') body['nombre'] = usuario.nombre;
        if (usuario.email !== '') body['email'] = usuario.email;
        if (usuario.password !== '') {
            // Encryptando contraseña
            usuario.password = await usuario.encryptPassword(password);
            body['password'] = usuario.password;
        }
        if (usuario.ciudad !== '') body['ciudad'] = usuario.ciudad;
        if (usuario.departamento !== '')
            body['departamento'] = usuario.departamento;
        if (usuario.direccion !== '') body['direccion'] = usuario.direccion;
        if (usuario.telefono !== '') body['telefono'] = usuario.telefono;
        body['avatar'] = usuario.avatar;
    } else {
        const usuario = new Usuario({
            nombre,
            email,
            password,
            direccion,
            departamento,
            ciudad,
            telefono,
        });

        if (usuario.nombre !== '') body['nombre'] = usuario.nombre;
        if (usuario.email !== '') body['email'] = usuario.email;
        if (usuario.password !== '') {
            // Encryptando contraseña
            usuario.password = await usuario.encryptPassword(password);
            body['password'] = usuario.password;
        }
        if (usuario.ciudad !== '') body['ciudad'] = usuario.ciudad;
        if (usuario.departamento !== '')
            body['departamento'] = usuario.departamento;
        if (usuario.direccion !== '') body['direccion'] = usuario.direccion;
        if (usuario.telefono !== '') body['telefono'] = usuario.telefono;
    }

    try {
        const registro = await Usuario.findByIdAndUpdate(_id, body, {
            new: true,
        });
        res.status(200).json({
            auth: true,
            id: registro._id,
            mensaje: 'Actualizacion Exitosa',
        });
    } catch (err) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err,
        });
    }
};

// Eliminar un usuario
export const deleteUsuario = async (req, res) => {
    const _id = req.params.id;
    try {
        const response = await Usuario.findByIdAndDelete({ _id });

        if (!response) {
            return res.status(404).json({ mensaje: 'No se encontro usuario' });
        }

        res.status(200).json({
            auth: true,
            mensaje: 'Se elimino usuario',
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Logout de usuario
export const logoutUsuario = async (req, res) => {
    res.status(200).send({ auth: false, token: null });
};

// Exportar lib
export const libs = (req, res) => {
    res.status(200).send({ Categorias, Ciudades, Departamentos });
};

// Terminos y condiciones
export const terminos = async (req, res) => {
    const options = {
        root: path.join(__dirname),
    };

    const fileName = 'TERMINOS_Y_CONDICIONES.png';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
};
