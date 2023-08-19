import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/User"; // Import your User model

const sec = process.env.JWT as string;

export interface IUserRequest extends Request {
  userData?: IUser;
}

const verifyToken = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const cookies = req.cookies.access_token;
    const verify = jwt.verify(cookies, sec) as JwtPayload;

    if (verify) {
      const idUser: string = verify.id;
      const user = (await User.findOne({ _id: idUser })) as IUser;

      if (user) {
        req.userData = user;
      }
    }
  } catch (error) {
    return res.status(404).json({ error });
  }

  next();
};

export default verifyToken;
