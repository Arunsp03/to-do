// lib/auth.ts (or any other shared location for your auth configuration)
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID_LOCAL as string ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET_LOCAL as string ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "test", // Ensure this is set
  session: {
    strategy: "jwt", // Use JWT for session management (no need for `as string`)
  },
  jwt: {
    // Optional: Add custom JWT signing options
    secret: process.env.NEXTAUTH_SECRET || "test", // Ensure this is set
  },
};
