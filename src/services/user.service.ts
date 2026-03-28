// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { UserModel, CreateUserDto, UpdateUserDto } from '../models/user.model';
import { AppError } from '../utils/AppError';

export const UserService = {
  async findAll() {
    return UserModel.findAll();
  },

  async findById(id: string) {
    const user = UserModel.findById(id);
    if (!user) throw AppError.notFound(`User ${id} not found`);
    return user;
  },

  async create(dto: CreateUserDto) {
    const exists = UserModel.findByEmail(dto.email);
    if (exists) throw AppError.conflict('Email already in use');
    return UserModel.create(dto);
  },

  async update(id: string, dto: UpdateUserDto) {
    await UserService.findById(id);
    if (dto.email) {
      const exists = UserModel.findByEmail(dto.email);
      if (exists && exists.id !== id) throw AppError.conflict('Email already in use');
    }
    return UserModel.update(id, dto)!;
  },

  async delete(id: string) {
    await UserService.findById(id);
    UserModel.delete(id);
  },
};
