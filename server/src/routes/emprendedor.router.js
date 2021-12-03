import { Router } from 'express';
import {
    createEmprendedor,
    getEmprendedorId,
    getEmprendedorMailPass,
    updateEmprendedor,
    logoutEmprendedor,
    viewImgEmprendedor,
    getEmprededoresAll,
    deleteEmprendedor,
} from '../controllers/emprendedor.controller';
import { verifyToken } from '../lib/VerifyToken';

import { upload } from '../lib/ImageMulter';

const router = Router();

// Crear emprendedor
router.post('/create', upload.single('img'), createEmprendedor);

// Consultar emprendedor por Id
router.get('/find/:id', verifyToken, getEmprendedorId);

// Ver imagen de emprendedor 
router.get('/imagen/:id', viewImgEmprendedor);

// Consultar todos los emprendedores
router.get('/all', getEmprededoresAll);

// Consultar emprendedor por mail y password para login
router.post('/login', getEmprendedorMailPass);

// Actualizar emprendedor
router.put(
    '/update/:id',
    upload.single('img'),
    verifyToken,
    updateEmprendedor
);

// Eliminar emprendedor
router.delete('/delete/:id', verifyToken, deleteEmprendedor);

// Logout Emprendedor
router.post('/logout', verifyToken, logoutEmprendedor);

// Exporto el enrutador
export default router;
