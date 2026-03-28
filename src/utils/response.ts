// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiResponse } from '../types';

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = 'Success',
  statusCode = StatusCodes.OK,
): void => {
  const body: ApiResponse<T> = { success: true, message, data };
  res.status(statusCode).json(body);
};

export const sendCreated = <T>(res: Response, data: T, message = 'Created'): void => {
  sendSuccess(res, data, message, StatusCodes.CREATED);
};

export const sendNoContent = (res: Response): void => {
  res.status(StatusCodes.NO_CONTENT).send();
};

export const sendError = (
  res: Response,
  message: string,
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
  errors?: Record<string, string[]>,
): void => {
  const body: ApiResponse = { success: false, message, errors };
  res.status(statusCode).json(body);
};
