// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess, sendCreated, sendNoContent } from '../utils/response';

export const UserController = {
  getAll: asyncHandler(async (_req: Request, res: Response) => {
    const users = await UserService.findAll();
    sendSuccess(res, users);
  }),

  getById: asyncHandler(async (req: Request, res: Response) => {
    const user = await UserService.findById(req.params.id);
    sendSuccess(res, user);
  }),

  create: asyncHandler(async (req: Request, res: Response) => {
    const user = await UserService.create(req.body);
    sendCreated(res, user, 'User created');
  }),

  update: asyncHandler(async (req: Request, res: Response) => {
    const user = await UserService.update(req.params.id, req.body);
    sendSuccess(res, user, 'User updated');
  }),

  delete: asyncHandler(async (req: Request, res: Response) => {
    await UserService.delete(req.params.id);
    sendNoContent(res);
  }),
};
