# Project Code Review

## File: .env
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.env`
**Size**: 417 bytes
**Last Modified**: Fri Oct 04 2024 01:41:28 GMT-0600 (Mountain Daylight Time)

```javascript
DATABASE_URL="mongodb+srv://digitalherencia:q98ksKwbH56rakt5@cluster0.ygljk.mongodb.net/NextGenManagementDB?retryWrites=true&w=majority"
NEXTAUTH_SECRET="164fab940bcb04b3d1d640d506e4e2f8a02216e4ff5a2657d4419ea3e79e0b45"
AUTH0_CLIENT_ID="tIFnDAra4mHgrgGQM9HFX8FrE8isL7Gy"
AUTH0_CLIENT_SECRET="LqxONznjaBby_rBOtcLBrfZdBrsTVpXM9VaCZFg-GBTAiQ3T0ROYFS9ZS7qqcQG7"
AUTH0_DOMAIN="dev-wrf6egs1bskzk7n1.us.auth0.com"     

```

---

## File: .eslintrc.json
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.eslintrc.json`
**Size**: 61 bytes
**Last Modified**: Tue Oct 01 2024 23:35:18 GMT-0600 (Mountain Daylight Time)

```javascript
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

```

---

## File: .gitignore
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.gitignore`
**Size**: 391 bytes
**Last Modified**: Tue Oct 01 2024 23:35:18 GMT-0600 (Mountain Daylight Time)

```javascript
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

---

## File: next-env.d.ts
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next-env.d.ts`
**Size**: 228 bytes
**Last Modified**: Fri Oct 04 2024 01:26:17 GMT-0600 (Mountain Daylight Time)

```javascript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

---

## File: next.config.mjs
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next.config.mjs`
**Size**: 92 bytes
**Last Modified**: Tue Oct 01 2024 23:35:18 GMT-0600 (Mountain Daylight Time)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

---

## File: package.json
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/package.json`
**Size**: 759 bytes
**Last Modified**: Fri Oct 04 2024 22:37:51 GMT-0600 (Mountain Daylight Time)

```javascript
{
  "name": "next_gen_management_agency",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@heroicons/react": "^2.1.5",
    "@next-auth/prisma-adapter": "^1.0.7",
    "@prisma/client": "^5.20.0",
    "bcrypt": "^5.1.1",
    "framer-motion": "^11.11.1",
    "next": "14.2.14",
    "next-auth": "^4.24.8",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.14",
    "postcss": "^8",
    "prettier": "^2.8.7",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

---

## File: postcss.config.mjs
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/postcss.config.mjs`
**Size**: 135 bytes
**Last Modified**: Tue Oct 01 2024 23:35:18 GMT-0600 (Mountain Daylight Time)

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

---

## File: README.md
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/README.md`
**Size**: 4311 bytes
**Last Modified**: Wed Oct 02 2024 00:18:36 GMT-0600 (Mountain Daylight Time)

```javascript
# NextGen Management Agency 🚀

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Production-brightgreen)](https://nextgenmanagementagency.vercel.app)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-000?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x+-339933?logo=node.js)](https://nodejs.org/)
[![GitHub Repo](https://img.shields.io/github/stars/DigitalHerencia/NextGenManagementAgency?style=social)](https://github.com/DigitalHerencia/NextGenManagementAgency)

## 🌐 [Live Demo](https://nextgenmanagementagency.vercel.app)  
This project is deployed and live at [nextgenmanagementagency.vercel.app](https://nextgenmanagementagency.vercel.app) via **Vercel**.

---

## 📚 Project Overview
**NextGenManagementAgency** is a modern, responsive web application built with **Next.js**. It is designed to streamline talent management processes with a focus on performance, scalability, and an intuitive user experience.

### Key Features:
- ⚡ **Server-Side Rendering (SSR)** & **Static Site Generation (SSG)** for optimized performance.
- 🎨 **Tailwind CSS** for rapid styling and responsive design.
- 🔒 **Authentication**: Secure login and authorization flows (to be implemented).
- 📈 **SEO Optimization**: Built-in features to improve search engine visibility.
- 📊 **Analytics** integration for tracking user behavior and traffic (to be implemented).

---

## 🛠 Tech Stack
- **Next.js** - Framework for React apps with server-side rendering
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Strongly typed programming for JavaScript
- **Node.js** - JavaScript runtime for backend functionality
- **Vercel** - Deployment platform for Next.js apps

---

## 🏃‍♂️ Getting Started

### Prerequisites
- **Node.js**: Make sure you have Node.js installed (v18.x or newer).
- **Git**: Ensure Git is installed to clone the repository.

### Installation

1. Clone the repository:
   
```
   git clone https://github.com/DigitalHerencia/NextGenManagementAgency.git
   cd NextGenManagementAgency

```

2. Install the dependencies:
    
```
   npm install

```
    
3.  Run the development server:
    
```
    npm run dev

```
    
4.  Open your browser and go to:
    
```    
    http://localhost:3000
    
```    
___

## 🛠 Available Scripts

In the project directory, you can run:

-   **`npm run dev`**: Runs the app in development mode.
-   **`npm run build`**: Builds the app for production.
-   **`npm run start`**: Starts the production build.
-   **`npm run lint`**: Lints the codebase using ESLint.

___

## 🚀 Deployment

This project is deployed on **Vercel**. Every push to the `main` branch automatically triggers a new deployment. You can manually deploy by visiting [Vercel Dashboard](https://vercel.com/).

___

## 📂 Directory Structure

```
.
├── src/
│   ├── app/                # Core Next.js app directory
│   │   ├── layout.tsx      # Layout for the application
│   │   └── page.tsx        # Main page component
│   ├── components/         # Reusable components (to be added)
│   └── styles/             # Global styles
├── .gitignore              # Ignored files by Git
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts

```
___

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to the project:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a pull request.

___

## 📄 License

This project is licensed under the **MIT License**. 

___

## 📧 Contact

For inquiries, contact us at:  
**DigitalHerencia** - digitalherencia@outlook.com
```

---

## File: tailwind.config.ts
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/tailwind.config.ts`
**Size**: 732 bytes
**Last Modified**: Fri Oct 04 2024 02:35:12 GMT-0600 (Mountain Daylight Time)

```javascript
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        // Add the nav folder explicitly if needed
        "./src/components/nav/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                "geist-sans": ["Geist Sans", "sans-serif"],
                "geist-mono": ["Geist Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
export default config;

```

---

## File: tsconfig.json
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/tsconfig.json`
**Size**: 886 bytes
**Last Modified**: Fri Oct 04 2024 02:41:44 GMT-0600 (Mountain Daylight Time)

```javascript
{
  "compilerOptions": {
      "baseUrl": "./",
      "paths": {
          "@components/*": ["src/components/*"],
          "@/*": ["./src/*", "./app/*"] // Includes src and app folders
      },
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [
          {
              "name": "next"
          }
      ]
  },
  "include": [
      "next-env.d.ts",
      "**/*.ts",
      "**/*.tsx",
      ".next/types/**/*.ts",
      "src/types/declarations.d.ts", // Ensure this is included
      "app/**/*.tsx",
      "app/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

---

## File: schema.prisma
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/prisma/schema.prisma`
**Size**: 1780 bytes
**Last Modified**: Wed Oct 02 2024 01:05:10 GMT-0600 (Mountain Daylight Time)

```javascript
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id             String   @id @default(auto()) @map("_id") @db.ObjectId
  name           String?
  email          String   @unique
  emailVerified  DateTime?
  image          String?
  password       String
  role           Role     @default(USER)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  accounts       Account[]
  sessions       Session[]
}

enum Role {
  USER
  ADMIN
  TALENT
  CLIENT
}

model Account {
  id                 String   @id @default(auto()) @map("_id") @db.ObjectId
  userId             String   @db.ObjectId
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  session_state      String?

  user User @relation(fields: [userId], references: [id])
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  sessionToken String   @unique
  userId       String   @db.ObjectId
  expires      DateTime

  user User @relation(fields: [userId], references: [id])
}

model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId // Added @id for MongoDB
  identifier String   // Typically the user's email
  token      String   @unique  // Unique token for verification
  expires    DateTime  // Expiration date for the token

  @@unique([identifier, token]) // Ensure uniqueness of the token and identifier
}

```

---

## File: GeistMonoVF.woff
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/fonts/GeistMonoVF.woff`
**Size**: 67864 bytes
**Last Modified**: Tue Oct 01 2024 23:35:18 GMT-0600 (Mountain Daylight Time)

`[Binary file, skipped]`

---

## File: GeistVF.woff
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/fonts/GeistVF.woff`
**Size**: 66268 bytes
**Last Modified**: Tue Oct 01 2024 23:35:19 GMT-0600 (Mountain Daylight Time)

`[Binary file, skipped]`

---

## File: favicon.ico
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/favicon.ico`
**Size**: 9662 bytes
**Last Modified**: Fri Oct 04 2024 01:57:07 GMT-0600 (Mountain Daylight Time)

`[Binary file, skipped]`

---

## File: globals.css
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/globals.css`
**Size**: 500 bytes
**Last Modified**: Fri Oct 04 2024 22:14:05 GMT-0600 (Mountain Daylight Time)

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
  --font-geist-sans: 'Geist Sans', sans-serif;
  --font-geist-mono: 'Geist Mono', monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-geist-sans);
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

```

---

## File: layout.tsx
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/layout.tsx`
**Size**: 845 bytes
**Last Modified**: Fri Oct 04 2024 22:14:37 GMT-0600 (Mountain Daylight Time)

```javascript
import type { Metadata } from "next"
import localFont from "next/font/local"
import React from "react"
import "./globals.css"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}

```

---

## File: page.tsx
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/page.tsx`
**Size**: 5256 bytes
**Last Modified**: Sat Oct 05 2024 10:02:37 GMT-0600 (Mountain Daylight Time)

```javascript
import {
    EnvelopeIcon, // About Icon
    ShieldCheckIcon, // Contact Icon
    UserCircleIcon, // About Icon
} from "@heroicons/react/24/solid"
import Image from "next/image"

export default function Home() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            {/* Background Shapes */}
            <div className="fixed top-0 left-0 w-[225%] h-[225%] translate-x-[5%] -translate-y-[27%] transform rotate-180">
                {" "}
                <Image
                    src="/images/SHAPES_BLACK.png"
                    alt="Background Shapes"
                    fill
                    style={{ objectFit: "contain", opacity: 0.3 }}
                />
            </div>

            {/* Main content with logo and text */}
            <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] z-10">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    {/* Logo */}
                    <Image
                        src="/images/NGMA-AUTH-BLACK.png"
                        alt="NextGen Management Agency logo"
                        width={256}
                        height={75}
                        priority
                    />

                    {/* Main content */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
                        Welcome to NextGen Management Agency
                    </h1>
                    <p className="text-lg sm:text-xl text-center sm:text-left">
                        Manage talent and clients seamlessly with our all-in-one
                        solution for agencies.
                    </p>

                    <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                        <li className="mb-2">
                            To get started, sign in to your account.
                        </li>
                        <li>
                            Manage your talent, track projects, and deliver
                            exceptional results.
                        </li>
                    </ol>

                    {/* Call to Action Buttons */}
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
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 hover:bg-blue-800 text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                            href="/auth/signin"
                        >
                            Login
                        </a>
                    </div>
                </main>

                {/* Footer Section */}
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center absolute bottom-5 w-full">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextgenmanagementagency.vercel.app/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                        Contact
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextgenmanagementagency.vercel.app/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserCircleIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                        />
                        About
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextgenmanagementagency.vercel.app/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ShieldCheckIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                        />
                        Privacy Policy
                    </a>
                </footer>
            </div>
        </div>
    )
}

```

---

## File: register.tsx
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/auth/register.tsx`
**Size**: 641 bytes
**Last Modified**: Wed Oct 02 2024 16:20:29 GMT-0600 (Mountain Daylight Time)

```javascript
import { signIn } from 'next-auth/react';
import React from "react"

export default function Register() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Create a New Account</h1>
      <p>Use Auth0 to register for a new account.</p>
      <button
        onClick={() => signIn('auth0', { screen_hint: 'signup' })}
        style={{ padding: '10px 20px', marginTop: '20px', background: '#1DA1F2', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
      >
        Register with Auth0
      </button>
    </div>
  );
}

```

---

## File: signin.tsx
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/auth/signin.tsx`
**Size**: 565 bytes
**Last Modified**: Wed Oct 02 2024 16:20:23 GMT-0600 (Mountain Daylight Time)

```javascript
import { signIn } from 'next-auth/react';
import React from "react"

export default function SignIn() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Sign In to NextGen Management</h1>
      <button
        onClick={() => signIn('auth0')}
        style={{ padding: '10px 20px', marginTop: '20px', background: '#1DA1F2', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
      >
        Sign in with Auth0
      </button>
    </div>
  );
}

```

---

## File: signout.tsx
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/auth/signout.tsx`
**Size**: 550 bytes
**Last Modified**: Wed Oct 02 2024 16:20:35 GMT-0600 (Mountain Daylight Time)

```javascript
import { signOut } from 'next-auth/react';
import React from "react"

export default function SignOut() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Sign Out</h1>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        style={{ padding: '10px 20px', marginTop: '20px', background: '#ff4757', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
      >
        Sign Out
      </button>
    </div>
  );
}

```

---

## File: [...nextauth].ts
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/auth/[...nextauth].ts`
**Size**: 2137 bytes
**Last Modified**: Wed Oct 02 2024 17:18:49 GMT-0600 (Mountain Daylight Time)

```javascript
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

```

---

## File: next-auth.d.ts
**Path**: `H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/types/next-auth.d.ts`
**Size**: 447 bytes
**Last Modified**: Wed Oct 02 2024 16:32:46 GMT-0600 (Mountain Daylight Time)

```javascript
import { authOptions } from "@/app/auth/[...nextauth]"

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

```

---

