import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import path from 'path';
import emprendedorRoutes from './routes/emprendedor.router';
import adminRoutes from './routes/administrador.router';
import userRoutes from './routes/usuarios.router'

const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Carpeta donde se enviara el front
app.use(express.static(path.join(__dirname, 'public')));

// Implementacion de rutas
app.use('/emprendedor', emprendedorRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Implementa puerto
app.set('port', config.port);

export default app;
