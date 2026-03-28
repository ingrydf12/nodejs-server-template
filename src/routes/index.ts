// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { Router } from 'express';
import healthRouter from './health.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/health', healthRouter);
router.use('/users', userRouter);

export default router;
