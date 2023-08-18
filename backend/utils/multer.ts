import multer, {FileFilterCallback } from "multer";
import path from "path";
import { Request} from "express";

export const multerConfig = multer({
  storage: multer.diskStorage({
    destination: "./uploads",
  }),
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    const ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      const error = new Error("Unsupported file type!") as any;
      cb(error, false); 
    } else {
      cb(null, true);
    }
  },
});





