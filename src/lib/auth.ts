// lib/auth.ts (or any other shared location for your auth configuration)
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
     clientId: process.env.GITHUB_clientId_local??"",
      clientSecret:process.env.GITHUB_clientSecret_local??""
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "", // Ensure this is set
  session: {
    strategy: "jwt", // Use JWT for session management (no need for `as string`)
  },
  jwt: {
    // Optional: Add custom JWT signing options
    secret: process.env.NEXTAUTH_SECRET || "", // Ensure this is set
  },
};
