"use server";

import { signIn, signOut } from "@/auth";
import { connectMongoDB } from "@/lib/db";

interface NewAccountProps {
  name: string;
  email: string;
  office: string;
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
  } catch (error: any) {
    switch (error.type) {
      case "CredentialsSignin":
        return { message: "Invalid credentials" };
      default: {
        console.log({ error });
        throw error;
        // return { message: "Something went wrong" };
      }
    }
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
}: NewAccountProps) {
  try {
    if (!name || !email || !password || !office)
      throw new Error("Please fill in all fields first");

    connectMongoDB();
  } catch (error: any) {
    console.log({ error });
    return { success: false, message: error.message };
  }
}
