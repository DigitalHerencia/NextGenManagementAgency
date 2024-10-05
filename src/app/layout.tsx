import { UserProvider } from "@auth0/nextjs-auth0/client"
import type { Metadata } from "next"
import localFont from "next/font/local"
import React from "react"
import "./globals.css"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
    display: "swap", // Added display: swap for performance optimization
})

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
    display: "swap", // Added display: swap for performance optimization
})

export const metadata: Metadata = {
    title: "NextGen Management Agency",
    description: "Manage talent and clients seamlessly.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <UserProvider>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    {children}
                </body>
            </UserProvider>
        </html>
    )
}
