import { Request } from "express";
import { z } from "zod";
import { jwtPayloadSchema } from "../middleware/authMiddleware.js";

export type SessionUser = z.infer<typeof jwtPayloadSchema>;

export interface AuthRequest extends Request {
  user?: SessionUser;
}

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
  address: string;
}

export interface LoginBody {
  email: string;
  password: string;
}