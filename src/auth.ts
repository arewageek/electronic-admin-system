import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "./models/user";
import { connectMongoDB } from "./lib/db";

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
          connectMongoDB();

          const user = await User.findOne({ email });
          console.log({ user });
          if (!user) throw new Error("Account does not exist");

          if (!user.approved) throw "Account not approved";

          const isPasswordMatch = await bcrypt.compare(
            password as string,
            user.password
          );

          if (!isPasswordMatch) return null;

          console.log({ isPasswordMatch });

          return user;
        } catch (error) {
          throw "An unknown error occurred";
        }
      },
    }),
  ],
  jwt({ token, user }) {
    if (user) {
      token.id = user._id as string;
    }
    return token;
  },

  session({ session, token }) {
    session.user.id = token.id;
    return session;
  },
});
