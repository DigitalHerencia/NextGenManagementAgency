import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const ErrorPage: React.FC = () => {
    const router = useRouter()
    const { error } = router.query

    // Determine the error message to display
    const errorMessage = () => {
        switch (error) {
            case "Configuration":
                return "There is a configuration problem. Please contact the admin."
            case "AccessDenied":
                return "Access denied. You do not have permission to access this resource."
            case "Verification":
                return "Verification failed. Please try again or contact support."
            default:
                return "An unexpected error occurred. Please try again."
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
            <p className="text-lg text-gray-700 mb-8">{errorMessage()}</p>
            <Link href="/auth/signin">
                <a className="text-blue-500 underline hover:text-blue-700">
                    Go back to Sign In
                </a>
            </Link>
        </div>
    )
}

export default ErrorPage
