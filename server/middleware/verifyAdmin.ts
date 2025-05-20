import { Request, Response, NextFunction } from 'express';

export const verifyOwnAdminAccess = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = (req as any).user;
  const requestedId = req.params.id;

  if (!user || user.role.toLowerCase() !== 'admin') {
    res.status(403).json({ message: 'Only admins can access this route' });
    return;
  }

  // Only allow if the admin is accessing their own resource
  if (user.id !== requestedId) {
    res.status(403).json({ message: 'An admin can only access their own data' });
    return;
  }
  next();
};