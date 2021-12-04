import jwt from 'jsonwebtoken';
import Proveedor from '../models/proveedores.model';
import config from '../config';
import path from 'path';

//Crear Proveedor
export const createProveedor = async (req, res) => {
    try {
        const {
            nombre,
            mail,
            password,
            direccion,
            ciudad,
            departamento,
            telefono1,
            telefono2,
            actividad,
            msg_description,
            likes,
            doesnotlikes,
            telegram,
            whatsapp,
            twitter,
            facebook,
            linkedin,
        } = req.body;

        const data = req.file.buffer;
        // const data = req.body.img; // Postman
        const contentType = req.file.mimetype;
        // const contentType = req.body.img.type; //Postman
        const img = { data, contentType };

        const proveedor = new Proveedor({
            nombre,
            mail,
            password,
            direccion,
            ciudad,
            departamento,
            telefono1,
            telefono2,
            actividad,
            msg_description,
            likes,
            doesnotlikes,
            telegram,
            whatsapp,
            twitter,
            facebook,
            linkedin,
            img,
        });

        const email = await Proveedor.findOne({ mail });

        if (email) {
            res.status(200).json({
                mensaje: 'Ya existe una cuenta con este email',
            });
        } else {
            // Encryptar contraseña
            proveedor.password = await proveedor.encryptPassword(password);

            // Crea token
            const token = jwt.sign({ id: proveedor._id }, config.secret, {
                expiresIn: 60 * 60 * 2, //Expira en 2 horas
            });

            await proveedor.save();

            res.status(200).json({
                auth: true,
                mensaje: 'Registro exitoso',
                id: proveedor._id,
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

// Consultar base de datos por id de proveedor
export const getProveedorId = async (req, res) => {
    const _id = req.params.id;

    try {
        const register = await Proveedor.findOne({ _id }, { img: 0 }).select(
            '-password'
        );
        res.json(register);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consulta base de datos por email y password
export const getProveedorMailPass = async (req, res) => {
    const proveedor = await Proveedor.findOne(
        {
            mail: req.body.mail,
        },
        { img: 0 }
    ).select('+password');

    // Verifico si no se encontro el email en base de datos
    if (!proveedor) {
        return res.json({ auth: false, mensaje: 'Email no esta registrado' });
    }

    const validPassword = await proveedor.comparePassword(
        req.body.password,
        proveedor.password
    );

    // Si la validacion de contraseñaes incorrecta
    if (!validPassword) {
        return res.json({
            auth: false,
            token: null,
            mensaje: 'Contraseña incorrecta',
        });
    }

    const token = jwt.sign({ id: proveedor._id }, config.secret, {
        expiresIn: 60 * 60 * 2,
    });
    res.status(200).json({
        auth: true,
        mensaje: 'Bienvenido ' + proveedor.nombre,
        token,
        proveedor: proveedor,
    });
};

// Consultar Proveedores por filtros de busqueda
export const getProveedoresFilter = async (req, res) => {
    try {
        const { actividad, departamento, ciudad, nombre } = req.body;
        const proveedores = await Usuario.find(
            {
                nombre: { $regex: '.*' + nombre + '.*', $options: 'si' },
                actividad: { $regex: '.*' + actividad + '.*', $options: 'si' },
                departamento: {
                    $regex: '.*' + departamento + '.*',
                    $options: 'si',
                },
                ciudad: { $regex: '.*' + ciudad + '.*', $options: 'si' },
            },
            { img: 0 }
        );
        res.status(200).json({
            proveedores: proveedores,
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Ver imagen de proveedor
export const viewImgProveedor = async (req, res) => {
    const _id = req.params.id;

    try {
        const resp = await Proveedor.findOne({ _id }, { img: 1 });
        res.set('Content-Type', resp.img.contentType);
        res.send(resp.img.data);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Actualizar un proveedor
export const updateProveedor = async (req, res) => {
    const _id = req.params.id;
    const {
        nombre,
        mail,
        password,
        direccion,
        ciudad,
        departamento,
        telefono1,
        telefono2,
        actividad,
        msg_description,
        likes,
        doesnotlikes,
        telegram,
        whatsapp,
        twitter,
        facebook,
        linkedin,
    } = req.body;

    let body = {};

    if (req.file) {
        const data = req.file.buffer;
        // const data = req.body.img; // Postman
        const contentType = req.file.mimetype;
        // const contentType = req.body.img.type; //Postman
        const img = { data, contentType };

        const proveedor = new Proveedor({
            nombre,
            mail,
            password,
            direccion,
            ciudad,
            departamento,
            telefono1,
            telefono2,
            actividad,
            msg_description,
            likes,
            doesnotlikes,
            telegram,
            whatsapp,
            twitter,
            facebook,
            linkedin,
            img,
        });

        if (proveedor.nombre !== '') body['nombre'] = proveedor.nombre;
        if (proveedor.mail !== '') body['mail'] = proveedor.mail;
        if (proveedor.password !== '') {
            // Encryptando contraseña
            proveedor.password = await proveedor.encryptPassword(password);
            body['password'] = proveedor.password;
        }
        if (proveedor.ciudad !== '') body['ciudad'] = proveedor.ciudad;
        if (proveedor.departamento !== '')
            body['departamento'] = proveedor.departamento;
        if (proveedor.direccion !== '') body['direccion'] = proveedor.direccion;
        if (proveedor.telefono1 !== '') body['telefono1'] = proveedor.telefono1;
        if (proveedor.telefono2 !== '') body['telefono2'] = proveedor.telefono2;
        if (proveedor.actividad !== '') body['actividad'] = proveedor.actividad;
        if (proveedor.msg_description !== '')
            body['msg_description'] = proveedor.msg_description;
        if (proveedor.likes !== '') body['likes'] = proveedor.likes;
        if (proveedor.doesnotlikes !== '')
            body['doesnotlikes'] = proveedor.doesnotlikes;
        if (proveedor.telegram !== '') body['telegram'] = proveedor.telegram;
        if (proveedor.whatsapp !== '') body['whatsapp'] = proveedor.whatsapp;
        if (proveedor.twitter !== '') body['twitter'] = proveedor.twitter;
        if (proveedor.linkedin !== '') body['linkedin'] = proveedor.linkedin;
        body['img'] = proveedor.img;
    } else {
        const proveedor = new Proveedor({
            nombre,
            mail,
            password,
            direccion,
            ciudad,
            departamento,
            telefono1,
            telefono2,
            actividad,
            msg_description,
            likes,
            doesnotlikes,
            telegram,
            whatsapp,
            twitter,
            facebook,
            linkedin,
        });

        if (proveedor.nombre !== '') body['nombre'] = proveedor.nombre;
        if (proveedor.mail !== '') body['mail'] = proveedor.mail;
        if (proveedor.password !== '') {
            // Encryptando contraseña
            proveedor.password = await proveedor.encryptPassword(password);
            body['password'] = proveedor.password;
        }
        if (proveedor.ciudad !== '') body['ciudad'] = proveedor.ciudad;
        if (proveedor.departamento !== '')
            body['departamento'] = proveedor.departamento;
        if (proveedor.direccion !== '') body['direccion'] = proveedor.direccion;
        if (proveedor.telefono !== '') body['telefono'] = proveedor.telefono;
        if (proveedor.actividad !== '') body['actividad'] = proveedor.actividad;
        if (proveedor.msg_description !== '')
            body['msg_description'] = proveedor.msg_description;
        if (proveedor.likes !== '') body['likes'] = proveedor.likes;
        if (proveedor.doesnotlikes !== '')
            body['doesnotlikes'] = proveedor.doesnotlikes;
        if (proveedor.telegram !== '') body['telegram'] = proveedor.telegram;
        if (proveedor.whatsapp !== '') body['whatsapp'] = proveedor.whatsapp;
        if (proveedor.twitter !== '') body['twitter'] = proveedor.twitter;
        if (proveedor.linkedin !== '') body['linkedin'] = proveedor.linkedin;
    }

    try {
        const registro = await Proveedor.findByIdAndUpdate(_id, body, {
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

// Consultar todos los proveedores
export const getProveedorAll = async (req, res) => {
    try {
        const proveedor = await Proveedor.find({}, { img: 0 });
        res.status(200).json({
            proveedores: proveedor,
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consultar todos proveedores visibles
export const getProveedoresVisibles = async (req, res) => {
    try {
        const proveedores = await Usuario.find({ visible: true }, { img: 0 });
        res.status(200).json({
            proveedores: proveedores,
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
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

// Eliminar un emprendedor
export const deleteProveedor = async (req, res) => {
    const _id = req.params.id;
    try {
        const response = await Proveedor.findByIdAndDelete({ _id });

        if (!response) {
            return res
                .status(404)
                .json({ mensaje: 'No se encontro proveedor' });
        }

        res.status(200).json({
            mensaje: 'Se elimino proveedor',
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Logout de emprendedor
export const logoutProveedor = async (req, res) => {
    res.status(200).send({ auth: false, token: null });
};
