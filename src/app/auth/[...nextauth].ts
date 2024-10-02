import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

// Initialize Prisma Client
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    // Prisma Adapter for NextAuth
    adapter: PrismaAdapter(prisma),

    // Configure Auth0 Provider
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID || "", // Ensure env variables are set
            clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
            issuer: `https://${process.env.AUTH0_DOMAIN || ""}`, // Use Auth0 domain from env
        }),
    ],

    // Secret for NextAuth sessions
    secret: process.env.NEXTAUTH_SECRET,

    // Session Configuration
    session: {
        strategy: "jwt", // Using JSON Web Tokens for session handling
        maxAge: 24 * 60 * 60, // Session expiration set to 1 day
        updateAge: 60 * 60, // Refresh JWT after 1 hour of inactivity
    },

    // Custom Pages for Auth
    pages: {
        signIn: "/auth/signin", // Custom sign-in page
        error: "/auth/error", // Custom error page
    },

    // Callbacks for customizing JWT and session
    callbacks: {
        async session({ session, token }) {
            // Add user ID and role to the session
            if (session?.user && token.sub) {
                session.user.id = token.sub || "" // Add safe check
                session.user.role = token.role || "USER" // Default role to USER
            }
            return session
        },

        async jwt({ token, user }) {
            // Add user ID and role to JWT token
            if (user) {
                token.sub = user.id || "" // Add safe check
                token.role = user.role || "USER" // Default role to USER
            }
            return token
        },
    },

    // Enable debugging in development mode
    debug: process.env.NODE_ENV === "development",
}

export default NextAuth(authOptions)
