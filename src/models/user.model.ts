// Copyright (c) 2026 Ingryd Duarte. Todos os direitos reservados.
// Licenciado sob a licença MIT.
import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  name: string;
  email: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
}

// Need to update to pass your ORM.
const store = new Map<string, User>();

export const UserModel = {
  findAll(): User[] {
    return Array.from(store.values());
  },
  findById(id: string): User | undefined {
    return store.get(id);
  },
  findByEmail(email: string): User | undefined {
    return Array.from(store.values()).find((u) => u.email === email);
  },
  create(dto: CreateUserDto): User {
    const user: User = { id: uuidv4(), ...dto, createdAt: new Date(), updatedAt: new Date() };
    store.set(user.id, user);
    return user;
  },
  update(id: string, dto: UpdateUserDto): User | undefined {
    const user = store.get(id);
    if (!user) return undefined;
    const updated = { ...user, ...dto, updatedAt: new Date() };
    store.set(id, updated);
    return updated;
  },
  delete(id: string): boolean {
    return store.delete(id);
  },
};
