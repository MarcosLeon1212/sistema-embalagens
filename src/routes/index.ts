import { Router } from 'express';

import * as HomeController from '../controllers/homeController';



const router = Router();

router.get('/', HomeController.home);
router.get('/agenda/:id/excluir', HomeController.excluir);
router.post('/novotrabalho', HomeController.novotrabalho);








export default router;