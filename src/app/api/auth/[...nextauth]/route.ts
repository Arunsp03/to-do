import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_clientId_PRODUCTION??"",
      clientSecret:process.env.GITHUB_clientSecret_PRODUCTION??""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "", // Ensure this is set
  session: {
    strategy: "jwt", // Use JWT for session management (no need for `as string`)
  },
  jwt: {
    // Optional: Add custom JWT signing options
    secret: process.env.NEXTAUTH_SECRET || "", // Ensure this is set
  },
})

export { handler as GET, handler as POST }