"use server";

import bcrypt from "bcrypt";
import { signIn, signOut } from "@/auth";
import { connectMongoDB } from "@/lib/db";
import User from "@/models/user";

interface NewAccountProps {
  name: string;
  email: string;
  office: string;
  tel: string;
  password: string;
}

export async function handleCredentialsSignin(email: string, password: string) {
  try {
    const signin = await signIn("credentials", {
      email,
      password,
      redirectTo: "/app/staff",
    });
    console.log({ signin });
    return { success: true, message: "login successful" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function signout() {
  await signOut({ redirectTo: "/" });
}

export async function handleNewAccountRequest({
  name,
  email,
  password,
  office,
  tel,
}: NewAccountProps) {
  try {
    if (!name || !email || !password || !office)
      throw new Error("Please fill in all fields first");

    connectMongoDB();
    const user = await User.findOne({ email });
    if (user) throw new Error("Account already exist");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      tel,
      role: office,
      password: hashedPassword,
    });

    newUser.save();

    return {
      succes: true,
      message: "Account creation successful. Awaiting HOD approval",
    };
  } catch (error: any) {
    console.log({ error });
    return { success: false, message: error.message };
  }
}
