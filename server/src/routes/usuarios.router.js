import { Router } from 'express';
import {
    getEmprededoresAll,
    viewImgEmprendedor,
    getEmprededoresFilter,
    getEmprededoresVisibles,
    terminos,
} from '../controllers/usuarios.controller';

const router = Router();

// Consultar todos los emprendedores
router.get('/', getEmprededoresAll);

// Ver terminos y condiciones
router.get('/terminos', terminos);

// Consultar emprendedores visibles
router.get('/visible', getEmprededoresVisibles);

// Consultar emprendedor por filtro de busqueda
router.post('/filter', getEmprededoresFilter);

// Ver imagen de emprendedor 
router.get('/:id', viewImgEmprendedor);

// Exporto el enrutador 
export default router;