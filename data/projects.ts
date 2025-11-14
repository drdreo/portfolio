import type { StaticImageData } from "next/image";
import fitz from "../public/fitz.png";
import fretello from "../public/fretello.png";
import habi from "../public/habi.png";
import kcdice from "../public/kcdice.png";
import nixWallet from "../public/nix_wallet.png";
import oweDrahn from "../public/owe-drahn.png";
import poker from "../public/poker.png";
import risk from "../public/risk.png";
import slot from "../public/slot.png";
import tellit from "../public/tellit.png";

export interface Project {
    title: string;
    description: string;
    url?: string;
    image?: StaticImageData;
    github?: string;
    tags?: string[];
}

export const projects: Project[] = [
    {
        title: "NIX Wallet",
        description: "First seed-based browser wallet for NIX (Mute) enabling quick access to funds",
        url: "https://webwallet.nixplatform.io/",
        image: nixWallet,
        tags: ["Angular"]
    },
    {
        title: "Poker",
        description: "Lobby-based multiplayer poker game for friends",
        github: "https://github.com/drdreo/poker",
        image: poker,
        tags: ["Angular", "NestJS"]
    },
    {
        title: "KCDice",
        description: "Multiplayer dice game inspired by Kingdom Come: Deliverance.",
        url: "https://kcdice.drdreo.com",
        image: kcdice,
        github: "https://github.com/drdreo/hub/tree/master/apps/gameserver/games/dicegame",
        tags: ["Angular", "Go"]
    },
    {
        title: "lit-scss-loader",
        description: "Webpack loader simplifying SCSS integration in LitElement (≈1.5k weekly downloads)",
        url: "https://www.npmjs.com/package/lit-scss-loader",
        github: "https://github.com/drdreo/lit-scss-loader",
        tags: ["Webpack", "LitElement", "SCSS"]
    },
    {
        title: "Owe Drahn",
        description: "Multiplayer dice gambling game. 6 lives - rolling above 15 loses everything.",
        url: "https://owe-drahn.drdreo.com/",
        github: "https://github.com/drdreo/owe-drahn",
        image: oweDrahn,
        tags: ["React", "NestJS", "Google OAuth"]
    },
    {
        title: "Habi",
        description: "A habit tracker web app. Simply track anything.",
        github: "https://habi.drdreo.com",
        image: habi,
        tags: ["Angular", "MaterialUI", "Go", "Auth0"]
    },
    {
        title: "Tell It",
        description: "Turn-based collaborative storytelling game for friends.",
        url: "https://tell-it.drdreo.com/",
        image: tellit,
        github: "https://github.com/drdreo/tellit",
        tags: ["Angular", "Go"]
    },
    {
        title: "Hub",
        description: "Mono-repo platform consolidating personal apps with shared tooling and infra.",
        github: "https://github.com/drdreo/hub",
        tags: ["Angular", "React", "Go", "Nx", "MongoDB", "Cloudflare", "Railway"]
    },
    {
        title: "Game Server",
        description:
            "Generic WebSocket server framework for rapid multiplayer game development (rooms, clients, lifecycle).",
        github: "https://github.com/drdreo/hub/tree/master/apps/gameserver",
        tags: ["Go", "MongoDB"]
    },
    {
        title: "Declarative Shadow Root <shadow-root>",
        description:
            "My master thesis research implementation enabling SSR of Web Components via declarative shadow roots.",
        url: "https://github.com/drdreo/declarative-shadow",
        github: "https://github.com/drdreo/declarative-shadow",
        tags: ["Web Components", "SSR"]
    },
    {
        title: "Donkey Script",
        description:
            "My own scripting language written in Go. Dipping into the world of interpreted and compiled languages.",
        url: "https://github.com/drdreo/donkey-script",
        github: "https://github.com/drdreo/donkey-script",
        tags: ["Go"]
    },
    {
        title: "RoboCode TS",
        description: "TypeScript web remake of the classic Java RoboCode robot battle game.",
        url: "https://github.com/drdreo/robocode",
        github: "https://github.com/drdreo/robocode",
        tags: ["Angular", "NestJS"]
    },
    {
        title: "RisikOnline",
        description: "Unreleased web multiplayer adaptation of the Risk board game.",
        image: risk,
        github: "https://github.com/drdreo/risikonline",
        tags: ["Angular", "NestJS", "Socket.IO"]
    },
    {
        title: "fitzbrothers",
        description: "Marketing site for the Fitzbrothers band.",
        url: "https://fitzbrothers.at/",
        github: "https://github.com/drdreo/fitzbrothers",
        image: fitz,
        tags: ["Nuxt"]
    },
    {
        title: "Fretello",
        description: "Freelance delivery of homepage and song search application.",
        url: "https://fretello.com/",
        image: fretello,
        tags: ["Angular", "SSR"]
    },
    {
        title: "Celcius",
        description: "Rust CLI toolkit for git cleanup, GitHub PR analytics etc.",
        github: "https://github.com/drdreo/celcius",
        tags: ["Rust"]
    },
    {
        title: "Electro Ultraways",
        description: "Slot machine simulator exploring odds modeling in React.",
        url: "https://slot.drdreo.com/",
        github: "https://github.com/drdreo/electro-slot",
        image: slot,
        tags: ["React"]
    }
];
