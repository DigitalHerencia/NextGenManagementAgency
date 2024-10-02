import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0"; // Use Auth0 as the authentication provider

const prisma = new PrismaClient();

export default NextAuth({
  // Use Prisma as the adapter for storing user data and sessions
  adapter: PrismaAdapter(prisma),

  // Configure Auth0 as the authentication provider
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID || "", // Ensure it's never undefined
      clientSecret: process.env.AUTH0_CLIENT_SECRET || "", // Ensure it's never undefined
      issuer: process.env.AUTH0_DOMAIN ? `https://${process.env.AUTH0_DOMAIN}` : "", // Ensure issuer is never undefined
    }),
  ],

  // NextAuth.js secret for encryption and token signing
  secret: process.env.NEXTAUTH_SECRET,

  // Configure session to use JWT (stateless, scalable)
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1-day session expiration (adjustable as needed)
    updateAge: 60 * 60, // Update JWT every hour
  },

  // Optional: Custom Pages (Sign-In, Error, etc.)
  pages: {
    signIn: "/auth/signin", // Redirect to a custom sign-in page (if you have one)
    error: "/auth/error",   // Redirect in case of an error
  },

  // Callbacks for handling session and JWT management
  callbacks: {
    // Session callback - Attach user ID and role to session object
    async session({ session, token }) {
      if (session?.user) { // Check if session and session.user exist
        session.user.id = token.sub; // Attach the user ID from the token to the session object
        session.user.role = token.role || "USER"; // Attach custom role (if available)
      }
      return session;
    },

    // JWT callback - Attach user data to the JWT payload
    async jwt({ token, user, account }) {
      // This block only runs when the user first signs in, otherwise it's just the token
      if (user) {
        token.sub = user.id; // Attach the user ID to the JWT
        token.role = user.role || "USER"; // Attach user role to the token (if roles are implemented)
      }

      // If you are using an OAuth provider, you can also handle specific account data here
      if (account) {
        token.provider = account.provider; // Attach the provider (e.g., 'auth0')
      }

      return token;
    },
  },

  // Additional options (e.g., enable debugging in development)
  debug: process.env.NODE_ENV === "development", // Enable debug mode in development
});
