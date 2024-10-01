"use server";

import { connectMongoDB } from "@/lib/db";
import { generateToken, verifyToken } from "@/lib/jwtUtils";
import User from "@/models/user";
import { UserSession } from "@/models/userSession";
import bcrypt from "bcrypt";

//  interfaces   defined to structure the user object
interface UserProp {
  email: string;
  name: string;
  password: string;
  tel: string;
}
interface UserInterface {
  name: string;
  email: string;
  tel: string;
  role: string;
  bio: string;
  id: string;
}

export async function createAccount({
  email,
  name,
  password,
  tel,
}: UserProp): Promise<201 | 400 | 500> {
  try {
    connectMongoDB();

    // verify if user account already exist
    const user = await User.findOne({ where: { email } });
    // return an error if user already exist
    if (user) return 400;

    // generate a salt to be used for hashing user's password
    const salt = await bcrypt.genSalt(10);

    // has user's password
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user object
    const create = new User({
      email,
      name,
      password: hashedPassword,
      tel,
      role: "staff",
      bio: "",
    });
    // store user information in the database
    create.save();

    return 201;
  } catch (error) {
    console.log({ error });
    return 500;
  }
}

export async function authenticate({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{
  status: 200 | 404 | 500;
  user?: UserInterface;
  sessionId?: string;
  message?: string;
}> {
  try {
    // connect application to mongodb database
    connectMongoDB();

    // verify if user email already exist in the database
    const user = await User.findOne({ email });

    // throw a 404 error if user email is not found
    if (!user) return { status: 404, message: "Account does not exist" };

    // compare password with hashed password stored in database
    const isValidPassword = await bcrypt.compare(password, user.password);

    // return an error if password does not match
    if (!isValidPassword)
      return { status: 404, message: "Password did not match" };

    // generate jwt token to manage user session data
    const userData: UserInterface = {
      name: user.name,
      email: user.email,
      tel: user.tel,
      role: user.role,
      bio: user.bio,
      id: user.id,
    };

    // generate session token using jwt
    const sessionToken = generateToken(userData);

    // store hashed sessionId in the database for user authentication
    const userSession = new UserSession({
      userId: user._id,
      sessionId: sessionToken,
    });

    userSession.save();

    // send session and user data to application for client side storage (in cookies or state)
    return {
      status: 200,
      user: userData,
      sessionId: sessionToken,
      message: "Authentication Successful",
    };
  } catch (error) {
    // log, then throw an error if server error occurs
    console.log({ error });
    return { status: 500 };
  }
}

export async function verifySession(
  token: string
): Promise<{ status: 200 | 404 | 500; message: string; user?: UserInterface }> {
  try {
    const session = verifyToken(token);
    const userSessionData = await UserSession.findOne({ sessionId: token });

    console.log({ userSessionData, session });
    if (!userSessionData)
      return { status: 404, message: "Session does not exist" };
    const userId = await userSessionData.userId;
    const user = await User.findById(userId);
    if (!user) return { status: 404, message: "User not exist" };
    console.log({
      userInfo: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        bio: user.bio,
      },
    });
    return {
      status: 200,
      message: "data found",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        bio: user.bio,
        tel: user.tel,
      },
    };
  } catch (error) {
    console.log({ error });
    return {
      status: 500,
      message: "An error occurred verifying the user session",
    };
  }
}
