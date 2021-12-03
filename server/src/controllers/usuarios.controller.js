import Emprendedor from '../models/emprendedor.model';
import path from 'path';

// Consultar todos los emprendedores
export const getEmprededoresAll = async (req, res) => {
    try {
        const emprendedores = await Emprendedor.find({}, { img: 0 });
        res.status(200).json({
            emprendedores,
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consultar todos emprendedores visibles 
export const getEmprededoresVisibles = async (req, res) => {
    try {
        const emprendedores = await Emprendedor.find({visible: true}, { img: 0 });
        res.status(200).json({
            emprendedores,
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Consultar Emprendedor por filtros de busqueda
export const getEmprededoresFilter = async (req, res) => {
    try {
        const { actividad, departamento, ciudad, nombre } = req.body;
        const emprendedores = await Emprendedor.find(
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
            emprendedores,
        });
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error,
        });
    }
};

// Ver imagen de emprendedor
export const viewImgEmprendedor = async (req, res) => {
    const _id = req.params.id;

    try {
        const resp = await Emprendedor.findOne({ _id }, { img: 1 });
        res.set('Content-Type', resp.img.contentType);
        res.send(resp.img.data);
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