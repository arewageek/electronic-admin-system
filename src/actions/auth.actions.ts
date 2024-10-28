"use server";

import { signIn } from "@/auth";

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
        return { message: "Something went wrong" };
      }
    }
  }
}
