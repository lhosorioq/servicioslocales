import { Router } from 'express';
import {
    getProveedorAll,
    viewImgProveedor,
    getProveedoresVisibles,
    getProveedoresFilter,
    getProveedorId,
    likes,
} from '../controllers/proveedor.controller';

import {
    createUsuario,
    getUsuarioMailPass,
    viewImgUsuario,
    updateUsuario,
    getUsuarioId,
    getUsuariosAll,
    deleteUsuario,
    logoutUsuario,
    libs,
    terminos,
} from '../controllers/usuarios.controller';

import { verifyToken } from '../lib/VerifyToken';

import { upload } from '../lib/ImageMulter';

const router = Router();

// Crear Usuarios
router.post('/create', upload.single('avatar'), createUsuario);

// Login de Usuarios
router.post('/login', getUsuarioMailPass);

// Ver terminos y condiciones
router.get('/terminos', terminos);

// Ver libs
router.get('/libs', libs);

// Consultar todos los proveedores
router.get('/', getProveedorAll);

// Consultar proveedor por id 
router.get('/proveedor/:id', getProveedorId)

// Consultar proveedores visibles
router.get('/visible', getProveedoresVisibles);

// Consultar proveedor por filtro de busqueda
router.post('/filter', getProveedoresFilter);

// Ver imagen de proveedor
router.get('/proveedorimg/:id', viewImgProveedor);

// Likes proveedor
router.put('/likes/:id',verifyToken , likes)

// Buscar todos los Usuarios
router.get('/all', verifyToken, getUsuariosAll);

// Buscar usuarios por id
router.get('/:id', verifyToken, getUsuarioId);

// Ver imagen de Usuario
router.get('/imagen/:id', viewImgUsuario);

// Actualizar Usuarios
router.put('/update/:id', upload.single('avatar'), verifyToken, updateUsuario);

// Delete Usuario
router.delete('/delete/:id', verifyToken, deleteUsuario);

// Logout de usuario
router.post('/logout', verifyToken, logoutUsuario);

// Exporto el enrutador
export default router;
