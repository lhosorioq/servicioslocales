import { Router } from 'express';
import {
    createProveedor,
    getProveedorId,
    getProveedorMailPass,
    updateProveedor,
    logoutProveedor,
    viewImgProveedor,
    getProveedorAll,
    getProveedoresFilter,
    deleteProveedor,
    terminos,
} from '../controllers/proveedor.controller';
import { verifyToken } from '../lib/VerifyToken';

import { upload } from '../lib/ImageMulter';

const router = Router();

// Crear proveedor
router.post('/create', upload.single('img'), createProveedor);

// Ver terminos y condiciones
router.get('/terminos', terminos);

// Consultar proveedor por Id
router.get('/find/:id', verifyToken, getProveedorId);

// Ver imagen de proveedor 
router.get('/imagen/:id', viewImgProveedor);

// Consultar todos los proveedores
router.get('/all', getProveedorAll);

// Consultar proveedor por mail y password para login
router.post('/login', getProveedorMailPass);

// Actualizar proveedor
router.put(
    '/update/:id',
    upload.single('img'),
    verifyToken,
    updateProveedor
);

// Consultar proveedor por filtro de busqueda
router.post('/filter', getProveedoresFilter);

// Eliminar proveedor
router.delete('/delete/:id', verifyToken, deleteProveedor);

// Logout proveedor
router.post('/logout', verifyToken, logoutProveedor);

// Exporto el enrutador
export default router;
