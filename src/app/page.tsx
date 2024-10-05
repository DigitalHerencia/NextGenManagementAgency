import {
    DocumentDuplicateIcon,
    DocumentTextIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* Background Shapes */}
            <div className="absolute inset-0 -z-10 transform translate-x-32">
                <Image
                    src="/images/SHAPES_BLACK.png" // Use shapes as background
                    alt="Background Shapes"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="opacity-20" // Adjust opacity to blend with the design
                />
            </div>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
                {/* Framer Motion Animation for the Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Image
                        src="/images/NGMA-AUTH-BLACK.png"
                        alt="NextGen Management Agency logo"
                        width={300} // Adjust logo width
                        height={100} // Adjust logo height
                        priority
                    />
                </motion.div>

                {/* Framer Motion for Heading */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl font-bold text-center sm:text-left"
                >
                    Welcome to NextGen Management Agency
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-center sm:text-left"
                >
                    Manage talent and clients seamlessly with our all-in-one
                    solution for agencies.
                </motion.p>

                {/* Sign-In Steps with Fade-In Animation */}
                <motion.ol
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
                >
                    <li className="mb-2">
                        To get started, sign in to your account.{" "}
                        <Link
                            href="/auth/signin"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Sign In
                        </Link>
                    </li>
                    <li>
                        Manage your talent, track projects, and deliver
                        exceptional results.
                    </li>
                </motion.ol>

                {/* Buttons with Staggered Animations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex gap-4 items-center flex-col sm:flex-row"
                >
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="https://nextgenmanagementagency.vercel.app/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join as a Talent or Client
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://nextgenmanagementagency.vercel.app/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read the Documentation
                    </a>
                </motion.div>
            </main>

            {/* Footer section */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
            >
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextgenmanagementagency.vercel.app/docs/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DocumentTextIcon className="w-5 h-5" aria-hidden="true" />
                    Get Started
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DocumentDuplicateIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                    />
                    Templates
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextgenmanagementagency.vercel.app/about"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GlobeAltIcon className="w-5 h-5" aria-hidden="true" />
                    Learn more about us
                </a>
            </motion.footer>
        </div>
    )
}
