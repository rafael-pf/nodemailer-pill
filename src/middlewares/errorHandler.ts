import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { HttpException } from './index';

const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!error) return next();

  res.locals.status = error.status || 500;
  res.locals.message = error.message || 'Algo deu errado.';

  if (error instanceof ZodError) {
    res.locals.status = 400;
    res.locals.message = error.issues.map((issue) => issue.message).join(', ');
  }

  if (error instanceof PrismaClientKnownRequestError) {
    res.locals.status = 400;
    res.locals.message = error.meta;

    if (error.code === 'P2025') {
      res.locals.status = 404;
      res.locals.message = 'Não encontrado.';
    }
  }

  return next();
};

export default errorHandler;
