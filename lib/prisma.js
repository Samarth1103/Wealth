import { PrismaClient } from './generated/prisma'


// use `prisma` in your application to read and write data in your DB



export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
} 