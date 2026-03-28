// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { Router } from 'express';
import { env } from '../config/env';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ status: 'ok', app: env.APP_NAME, uptime: process.uptime(), timestamp: new Date() });
});

export default router;
