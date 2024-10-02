import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_clientId_local??"",
      clientSecret:process.env.GITHUB_clientSecret_local??""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "test", // Ensure this is set
  session: {
    strategy: "jwt", // Use JWT for session management (no need for `as string`)
  },
  jwt: {
    // Optional: Add custom JWT signing options
    secret: process.env.NEXTAUTH_SECRET || "test", // Ensure this is set
  },
})

export { handler as GET, handler as POST }