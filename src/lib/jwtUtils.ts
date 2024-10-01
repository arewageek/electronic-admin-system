import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

export const generateToken = (payload: JwtPayload): string => {
  const options: SignOptions = {
    expiresIn: "1hr", // 1 hour
  };
  const secret = process.env.JWT_SECRET!;

  const token = jwt.sign(payload, secret, options);
  return token;
};

export const verifyJWTToken = (token: string) => {
  const data = jwt.decode(token);
  console.log({ data });
  return data;
};
