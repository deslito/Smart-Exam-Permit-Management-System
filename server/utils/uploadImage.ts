import cloudinary from '../config/cloudinary';

export async function uploadImage(filePath: string, subfolder: string) {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: `KYU SEPMS/${subfolder}`, // e.g., 'KYU SEPMS/students'
  });
  return result.secure_url;
}