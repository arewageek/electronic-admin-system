import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authenticate } from "./actions/user.actions";
import User from "./models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const emailAddress = credentials.email as string | undefined;
        const pass = credentials.password as string | undefined;

        if (!emailAddress || !pass)
          throw new CredentialsSignin("Please provide both email and password");

        // const user = {
        //   name: "Austin",
        //   email: "arewa@gmail.com",
        //   password: "",
        //   role: "staff",
        // };

        const user = await User.findOne({ where: { email: emailAddress } });
        if (!user)
          throw new CredentialsSignin("Could not find a matching user");

        if (user.email != emailAddress)
          throw new CredentialsSignin("Email is not correct");
        if (user.password != pass)
          throw new CredentialsSignin("Invalid password provided");

        return user;
      },
    }),
  ],
});
