import { authOptions } from "@/pages/auth/[...nextauth]"

declare module "next-auth" {
    interface Session {
        user: {
            id: string // Add the user ID
            role?: string // Add the role
        } & DefaultSession["user"] // Merge with default user properties
    }

    interface User {
        id: string // Add the user ID
        role?: string // Add the role
    }
}
export default NextAuth(authOptions)
