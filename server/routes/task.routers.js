import { Router } from 'express';
import{getSensores, getSensor, createSensor, updateSensor, deleteSensor, getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } from '../controllers/task.controllers.js'

const router = Router();

router.get('/valores', getSensores)
router.get('/usuarios', getUsuarios)

router.get('/valores/:id', getSensor)
router.get('/usuarios/:id', getUsuario)

router.post('/valores', createSensor)
router.post('/usuarios', createUsuario)

router.put('/valores/:id', updateSensor)
router.put('/usuarios/:id', updateUsuario)

router.delete('/valores/:id', deleteSensor)
router.delete('/usuarios/:id', deleteUsuario)

export default router;