import express from "express";
import {
  getAllInvigilators,
  getInvigilatorById,
  createInvigilator,
  updateInvigilator,
  deleteInvigilator,
} from "../controllers/invigilatorController";
import { authenticateToken } from "../middleware/auth";
import { authorizeRoles } from "../middleware/authorizeRoles";
import { verifyInvigilatorOrAdminAccess } from "../middleware/verifyInvigilatorOrAdminAccess";
import upload from "../config/multer";

const router = express.Router();

router.get("/", authenticateToken, authorizeRoles("admin"), getAllInvigilators);
router.get(
  "/:id",
  authenticateToken,
  authorizeRoles("invigilator", "student"),
  verifyInvigilatorOrAdminAccess,
  getInvigilatorById
);

router.post(
  "/",
  authenticateToken,
  authorizeRoles("admin"),
  upload.single("photo"), // <-- for file upload
  createInvigilator
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRoles("admin"),
  updateInvigilator
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRoles("admin"),
  deleteInvigilator
);

export default router;
