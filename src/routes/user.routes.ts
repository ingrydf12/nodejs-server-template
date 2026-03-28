// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { Router } from 'express';
import { z } from 'zod';
import { UserController } from '../controllers/user.controller';
import { validate } from '../middlewares/validate';

const router = Router();

const createUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
});

const updateUserSchema = createUserSchema.partial();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', validate({ body: createUserSchema }), UserController.create);
router.patch('/:id', validate({ body: updateUserSchema }), UserController.update);
router.delete('/:id', UserController.delete);

export default router;
