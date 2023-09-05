import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next"
import User from "@/models/User"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        const res = await fetch(`${process.env.URL_LOCAL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        const user = await res.json()

        if (user) {
          return user
        } else {
          return null;
        }
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token;
      return session
    }
  },
})

export { handler as GET, handler as POST }