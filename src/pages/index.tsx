import { NextPage } from "next" // Ensure you import NextPage type for better TypeScript integration
import Head from "next/head"
import React from "react"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>NextGen Management Agency</title>
                <meta
                    name="description"
                    content="Manage talent and clients seamlessly with NextGen Management Agency"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Welcome to NextGen Management Agency</h1>
                <p>
                    This is the homepage for managing talent and clients with
                    ease.
                </p>
            </main>
        </>
    )
}

export default Home
