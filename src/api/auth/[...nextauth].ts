import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0" // Use Auth0 as the authentication provider

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma), // Use Prisma as the adapter
    providers: [
        // Auth0 Provider Configuration
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: `https://${process.env.AUTH0_DOMAIN}`,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // Ensure this secret is present in your .env file
    session: {
        strategy: "jwt", // Use JWT sessions
    },
    pages: {
        signIn: "/auth/signin", // Optional: Custom sign-in page
    },
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub // Pass the user ID to the session
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id // Save user ID in the token
            }
            return token
        },
    },
})
