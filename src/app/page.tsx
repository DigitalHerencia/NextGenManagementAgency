import {
    DocumentDuplicateIcon,
    DocumentTextIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <Image
                    src="/images/SHAPES_BLACK.png"
                    alt="Background Shapes"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    style={{ opacity: 0.3 }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 sm:p-20">
                <main className="text-center">
                    {/* Adjusted logo placement */}
                    <div className="mb-8">
                        <Image
                            src="/images/NGMA-AUTH-BLACK.png"
                            alt="NextGen Management Agency logo"
                            width={256}
                            height={75}
                            priority
                            className="mx-auto"
                        />
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Welcome to NextGen Management Agency
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Manage talent and clients seamlessly with our all-in-one
                        solution for agencies.
                    </p>

                    <ol className="list-inside list-decimal text-sm sm:text-base font-mono mb-8">
                        <li className="mb-2">
                            To get started, sign in to your account.{" "}
                            <Link href="/auth/signin">
                                <a className="text-blue-600 underline hover:text-blue-800">
                                    Sign In
                                </a>
                            </Link>
                        </li>
                        <li>
                            Manage your talent, track projects, and deliver
                            exceptional results.
                        </li>
                    </ol>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <a
                            className="rounded-full border border-solid border-transparent bg-foreground text-background transition-colors hover:bg-gray-800 dark:hover:bg-gray-400 text-sm sm:text-base h-10 sm:h-12 px-6"
                            href="https://nextgenmanagementagency.vercel.app/register"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join as a Talent or Client
                        </a>
                        <a
                            className="rounded-full border border-solid border-gray-700 dark:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 text-sm sm:text-base h-10 sm:h-12 px-6"
                            href="https://nextgenmanagementagency.vercel.app/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read the Documentation
                        </a>
                    </div>
                </main>

                {/* Footer */}
                <footer className="flex gap-6 flex-wrap justify-center">
                    <a
                        className="flex items-center gap-2 hover:underline"
                        href="https://nextgenmanagementagency.vercel.app/docs/get-started"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DocumentTextIcon className="w-5 h-5" />
                        Get Started
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline"
                        href="https://vercel.com/templates?framework=next.js"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DocumentDuplicateIcon className="w-5 h-5" />
                        Templates
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline"
                        href="https://nextgenmanagementagency.vercel.app/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GlobeAltIcon className="w-5 h-5" />
                        Learn more about us
                    </a>
                </footer>
            </div>
        </div>
    )
}
