// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { StatusCodes } from 'http-status-codes';

export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR,
    public readonly errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string, errors?: Record<string, string[]>) {
    return new AppError(message, StatusCodes.BAD_REQUEST, errors);
  }

  static unauthorized(message = 'Unauthorized') {
    return new AppError(message, StatusCodes.UNAUTHORIZED);
  }

  static forbidden(message = 'Forbidden') {
    return new AppError(message, StatusCodes.FORBIDDEN);
  }

  static notFound(message = 'Resource not found') {
    return new AppError(message, StatusCodes.NOT_FOUND);
  }

  static conflict(message: string) {
    return new AppError(message, StatusCodes.CONFLICT);
  }
}
