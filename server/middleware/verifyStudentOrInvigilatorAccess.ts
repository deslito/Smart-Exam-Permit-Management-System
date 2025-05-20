import { Request, Response, NextFunction } from 'express';

export const verifyStudentOrInvigilatorAccess = (
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

  const userRole = user.role.toLowerCase();

  // Students can only access their own data
  if (userRole === 'student') {
    if (user.id !== requestedId) {
      res.status(403).json({ message: 'Students can only access their own data' });
      return;
    }
    return next();
  }

  // Invigilators and Admins can access any student's data
  if (userRole === 'invigilator' || userRole === 'admin') {
    return next();
  }

  // All other roles are unauthorized
  res.status(403).json({ message: 'Admins, invigilators and verified students can access this route' });
};
