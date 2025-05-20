import { Request, Response, NextFunction } from 'express';

export const verifyInvigilatorOrAdminAccess = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = (req as any).user;
  const requestedId = req.params.id;

  if (!user || !user.role) {
    res.status(403).json({ message: 'Unauthorized access: no role found' });
    return;
  }

  const role = user.role.toLowerCase();

  // Students can only access their own data
  if (role === 'invigilator') {
    if (user.id !== requestedId) {
      res.status(403).json({ message: 'Invigilators can only access their own data' });
      return;
    }
    return next();
  }

  // Allow access to admins
  if (role === 'admin') {
    return next();
  }

    // All other roles are unauthorized
  res.status(403).json({ message: 'Only admins and verified invigilator can access this route' });
};