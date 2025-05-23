import prisma from '../config/prismaClient';
import { Request, RequestHandler, Response } from 'express';
import cloudinary from '../config/cloudinary';
import bcrypt from 'bcrypt';

export const getAllInvigilators: RequestHandler = async (req: Request, res: Response) => {
  const invigilators = await prisma.invigilator.findMany({
    include: {
      user: { select: { email: true } }
    }
  });
  res.json(invigilators);
};

export const getInvigilatorById: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const invigilator = await prisma.invigilator.findUnique({
    where: { id },
    include: {
      user: true,
      assignedExams: {
        include: {
          exam: {
            include: {
              courseUnit: true
            }
          }
        }
      }
    }
  });
  if (!invigilator) {
    res.status(404).json({ message: 'Invigilator not found' });
    return;
  }
  res.json(invigilator);
};

// CREATE Invigilator
export const createInvigilator: RequestHandler = async (req, res) => {
  try {
    const { title, firstName, lastName, otherName, email, department, password, picture } = req.body;

    // 1. Generate invigilatorNumber
    const deptDigits = department.replace(/\D/g, '').padStart(3, '0');
    const count = await prisma.invigilator.count({
      where: { departmentId: department },
    });
    const nextNumber = (count + 1).toString().padStart(3, '0');
    const invigilatorNumber = `${deptDigits}/INV/${nextNumber}`;

    // 2. Handle image upload (file, base64, or URL)
    let pictureToSave = picture;
    const file = (req as any).file;
    if (file) {
      // File upload via multer
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'invigilators'
      });
      pictureToSave = result.secure_url;
    } else if (picture && typeof picture === 'string') {
      if (picture.startsWith('data:image/')) {
        // Base64 data URL
        const result = await cloudinary.uploader.upload(picture, {
          folder: 'invigilators'
        });
        pictureToSave = result.secure_url;
      } else if (/^https?:\/\//.test(picture)) {
        // Already a valid URL, use as is
        pictureToSave = picture;
      } else if (picture) {
        // Assume it's a local file path (like in seeder)
        const result = await cloudinary.uploader.upload(picture, {
          folder: 'invigilators'
        });
        pictureToSave = result.secure_url;
      }
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'INVIGILATOR',
      },
    });

    // 5. Create invigilator
    const invigilator = await prisma.invigilator.create({
      data: {
        invigilatorNumber,
        title,
        firstName,
        lastName,
        otherNames: otherName,
        picture: pictureToSave,
        department: { connect: { id: department } },
        user: { connect: { id: user.id } },
      },
      include: { user: { select: { email: true } } }
    });

    res.status(201).json(invigilator);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create invigilator', error });
  }
};

// UPDATE Invigilator
export const updateInvigilator: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, firstName, lastName, otherName, department, picture } = req.body;

    let pictureToSave = picture;
    const file = (req as any).file;
    if (file) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'invigilators'
      });
      pictureToSave = result.secure_url;
    } else if (picture && typeof picture === 'string') {
      if (picture.startsWith('data:image/')) {
        const result = await cloudinary.uploader.upload(picture, {
          folder: 'invigilators'
        });
        pictureToSave = result.secure_url;
      } else if (/^https?:\/\//.test(picture)) {
        pictureToSave = picture;
      } else if (picture) {
        const result = await cloudinary.uploader.upload(picture, {
          folder: 'invigilators'
        });
        pictureToSave = result.secure_url;
      }
    }

    const invigilator = await prisma.invigilator.update({
      where: { id },
      data: {
        title,
        firstName,
        lastName,
        otherNames: otherName,
        picture: pictureToSave,
        department: { connect: { id: department } },
      },
      include: { user: { select: { email: true } } }
    });

    res.json(invigilator);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update invigilator', error });
  }
};

// DELETE Invigilator
export const deleteInvigilator: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    // Optionally, delete the user as well
    const invigilator = await prisma.invigilator.delete({
      where: { id },
    });

    res.json({ message: 'Invigilator deleted', invigilator });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete invigilator', error });
  }
};