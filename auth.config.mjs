import { CredentialsSignin } from "@auth/core/errors";
import Credentials from "@auth/core/providers/credentials";
import { defineConfig } from "auth-astro";
import { client } from "./src/lib/sanity";
import bcrypt from "bcryptjs";

export default defineConfig({
  providers: [
    Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Find user in Sanity
        const user = await client.fetch(
          `
          *[_type == "user" && email == $email][0] {
            _id,
            name,
            email,
            password,
            role
          }
        `,
          { email }
        );

        if (!user) throw new CredentialsSignin("Invalid credentials");

        // Verify password (in a real app, you'd hash the password before storing)
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new CredentialsSignin("Invalid credentials");

        // Return user data (don't include password)
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
