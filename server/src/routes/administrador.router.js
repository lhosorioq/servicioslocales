import { Router } from 'express';
import {
    createAdmin,
    getAdminUserPass,
    getAdmin,
    findAdminId,
    updateAdmin,
    deleteAdmin,
    getEmprendedores,
    updateEmprendedores,
    deleteEmprendedor,
} from '../controllers/administrador.controller';
import { verifyToken } from '../lib/VerifyToken';
import { upload } from '../lib/ImageMulter';

const router = Router();

// Crea Administrador
router.post('/create', verifyToken, createAdmin);

// Consulta todos los Administradores
router.get('/find', verifyToken, getAdmin);

// login de Administrador
router.post('/login', getAdminUserPass);

// Busca Administrador por id
router.get('/findid/:id', verifyToken, findAdminId);

// Actualiza Administrador
router.put('/update/:id', verifyToken, updateAdmin);

// Elimina un Administrador
router.delete('/delete/:id', verifyToken, deleteAdmin);

// Consulta todos los Emprendedores
router.get('/findemprendedores', verifyToken, getEmprendedores);

// Actualiza emprendedor
router.put(
    '/updateemprendedor/:id',
    upload.single('img'),
    verifyToken,
    updateEmprendedores
);

// Elimina emprendedor
router.delete('/deleteemprendedor/:id', verifyToken, deleteEmprendedor);

export default router;
