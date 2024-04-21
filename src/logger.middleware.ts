// logger.middleware.ts
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startAt = Date.now();
    

    res.on('finish', () => {
      const duration = Date.now() - startAt;
      Logger.log(`${method} ${originalUrl} ${res.statusCode} ${duration}ms`);
    });

    next();
  }
}