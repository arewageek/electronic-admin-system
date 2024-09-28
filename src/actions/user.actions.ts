"use server";

import { connectMongoDB } from "@/lib/db";
import User, { IUser } from "@/models/user";
import bcrypt from "bcrypt";

interface UserProp {
  email: string;
  name: string;
  password: string;
  tel: string;
}

export async function createAccount({
  email,
  name,
  password,
  tel,
}: UserProp): Promise<201 | 400 | 500> {
  try {
    connectMongoDB();

    const user = await User.findOne({ where: { email } });
    console.log({ user, email });
    if (user) return 400;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    console.log({ hashedPassword });

    const create = new User({
      email,
      name,
      password: hashedPassword,
      tel,
      role: "staff",
      bio: "",
    });

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
}): Promise<{ status: 200 | 400 | 404 | 500; user?: IUser }> {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return { status: 404 };
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return { status: 400 };
    console.log(user);
    return { status: 200, user };
  } catch (error) {
    console.log({ error });
    return { status: 500 };
  }
}
