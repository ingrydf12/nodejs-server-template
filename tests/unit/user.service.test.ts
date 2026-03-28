// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { describe, it, expect, beforeEach } from 'vitest';
import { UserService } from '../../src/services/user.service';
import { AppError } from '../../src/utils/AppError';

describe('UserService', () => {
  beforeEach(() => {
    // Reset state between tests if needed
  });

  describe('create', () => {
    it('should create a user', async () => {
      const user = await UserService.create({ name: 'Alice', email: `alice+${Date.now()}@example.com` });
      expect(user.id).toBeDefined();
      expect(user.name).toBe('Alice');
    });

    it('should throw conflict on duplicate email', async () => {
      const email = `dup+${Date.now()}@example.com`;
      await UserService.create({ name: 'A', email });
      await expect(UserService.create({ name: 'B', email })).rejects.toBeInstanceOf(AppError);
    });
  });

  describe('findById', () => {
    it('should throw not found for unknown id', async () => {
      await expect(UserService.findById('non-existent')).rejects.toBeInstanceOf(AppError);
    });
  });
});
