import { FC } from "react";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { TechStack } from "../components/TechStack";
import { Work } from "../components/Work";
import { Footer } from "../components/Footer";
import { FluidCursor } from "../components/fluid-cursor/FluidCursor.tsx";

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Andreas Hahn | Full-Stack Engineer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Full-stack engineer crafting high-performance web experiences with modern technologies and meticulous attention to detail."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0f0f23" />
            </Head>

            <FluidCursor />

            <main className="main">
                <Hero />
                <TechStack />
                <Work />
                <Footer />
            </main>
        </>
    );
};

export default Home;
