import { Request, Response, NextFunction } from 'express';

class AuthenticationMiddleware {
  static authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (token !== 'valid_token') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    next();
  }
}

export default AuthenticationMiddleware;
