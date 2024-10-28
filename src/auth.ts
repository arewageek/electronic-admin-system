import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });
          if (!user) return null;

          const isPasswordMatch = bcrypt.compare(
            password as string,
            user.password
          );

          if (!isPasswordMatch) return null;

          return user;
        } catch (error) {
          console.log({ error });
          return error;
        }
      },
    }),
  ],
});
