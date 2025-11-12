import { FC } from "react";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { TechStack } from "../components/TechStack";
import { Work } from "../components/Work";
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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#0f0f23" />
            </Head>

            <FluidCursor />

            <main className="main">
                <Hero />
                <TechStack />
                <Work />
            </main>
        </>
    );
};

export default Home;
export interface Project {
    title: string;
    description: string;
    url?: string;
    image?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        title: "NIX Wallet",
        description:
            "The first NIX (now mute coin) web wallet for easy, seed-based browser access to your NIX coins. <angular>",
        url: "https://webwallet.nixplatform.io/",
        image: "/nix_wallet.png",
    },
    {
        title: "Poker",
        description:
            "A simple lobby based Poker game to play with your friends. Emerged due to COVID and the social distancing rules. <angular, nest.js>",
        github: "https://github.com/drdreo/poker",
        image: "/poker.png",
    },
    {
        title: "KCDice",
        description:
            "A Kingdom Come Deliverance inspired multiplayer dice game. <angular, golang>",
        url: "https://kcdice.drdreo.com",
        image: "/kcdice.png",
        github: "https://github.com/drdreo/hub/tree/master/apps/gameserver/games/dicegame",
    },
    {
        title: "lit-scss-loader",
        description:
            "A webpack loader plugin for easier SCSS handling for LitElement. Average of 1500 downloads / week",
        url: "https://www.npmjs.com/package/lit-scss-loader",
        github: "https://github.com/drdreo/lit-scss-loader",
    },
    {
        title: "Owe Drahn",
        description:
            "A dice roller gambling game to play with your friends. <react, nest.js, Google OAuth>",
        url: "https://owe-drahn.drdreo.com/",
        github: "https://github.com/drdreo/owe-drahn",
        image: "/owe-drahn.png",
    },
    {
        title: "Habi",
        description:
            "A habit tracker web app. Simply track anything. <angular, golang, auth0>",
        github: "https://habi.drdreo.com",
        image: "/habi.png",
    },
    {
        title: "Web Component prerendering",
        description:
            "My research environment to server-side render Web Components.",
        url: "https://github.com/drdreo/wc-prerender",
    },
    {
        title: "RisikOnline",
        description:
            "An HTML multiplayer game based on the ruleset of the board game Risk. Never released sadly. <angular, node, socket.io>",
        image: "/risk.png",
    },
    {
        title: "fitzbrothers",
        description:
            "The homepage for my friends from the fitzbrothers band. <nuxt.js>",
        url: "https://fitzbrothers.at/",
        github: "https://github.com/drdreo/fitzbrothers",
        image: "/fitz.png",
    },
    {
        title: "Fretello",
        description:
            "The homepage and songs search application for Fretello. <angular>",
        url: "https://fretello.com/",
        image: "/fretello.png",
    },
    {
        title: "RatCat",
        description:
            "A hosted configuration service. Manage configuration in one place, in real-time. <angular, nx>",
        github: "https://github.com/throw-if-null/cat",
        image: "/ratcat.png",
    },
    {
        title: "Electro Ultraways",
        description:
            "A ultraway slot machine. Fun project, created to experiment with React. <react>",
        url: "https://slot.drdreo.com/",
        github: "https://github.com/drdreo/electro-slot",
        image: "/slot.png",
    },
];
