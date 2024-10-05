import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

// Initialize Prisma Client
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),

    // Auth0 Provider
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID || "",
            clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
            issuer:
                process.env.AUTH0_ISSUER_BASE_URL ||
                `https://${process.env.AUTH0_DOMAIN}`,
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 60 * 60,
    },

    callbacks: {
        async session({ session, token }) {
            if (session?.user && token?.sub) {
                session.user.id = token.sub
                session.user.role = token.role || "USER"
            }
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id
                token.role = user.role || "USER"
            }
            return token
        },
    },

    debug: process.env.NODE_ENV === "development",
}

export default NextAuth(authOptions)
