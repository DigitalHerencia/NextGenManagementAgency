import {
    DocumentDuplicateIcon,
    DocumentTextIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)] bg-background text-foreground">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {/* Updated logo to use white version */}
                <Image
                    src="/images/NGMA-AUTH.png"
                    alt="NextGen Management Agency logo"
                    width={256} // Specify exact width
                    height={75} // Specify exact height
                    priority
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
                    Welcome to NextGen Management Agency
                </h1>
                <p className="text-lg sm:text-xl text-center sm:text-left">
                    Manage talent and clients seamlessly with our all-in-one
                    solution for agencies.
                </p>

                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[var(--font-geist-mono)]">
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
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
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
                </div>
            </main>

            {/* Footer section */}
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
            </footer>
        </div>
    )
}
