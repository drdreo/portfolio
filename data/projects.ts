export interface Project {
    title: string;
    description: string;
    url?: string;
    image?: string;
    github?: string;
    tags?: string[];
}

export const projects: Project[] = [
    {
        title: "NIX Wallet",
        description:
            "The first NIX (now mute coin) web wallet for easy, seed-based browser access to your NIX coins.",
        url: "https://webwallet.nixplatform.io/",
        image: "/nix_wallet.png",
        tags: ["angular"],
    },
    {
        title: "Poker",
        description:
            "A simple lobby based Poker game to play with your friends.",
        github: "https://github.com/drdreo/poker",
        image: "/poker.png",
        tags: ["angular", "nest.js"],
    },
    {
        title: "KCDice",
        description:
            "A Kingdom Come Deliverance inspired multiplayer dice game.",
        url: "https://kcdice.drdreo.com",
        image: "/kcdice.png",
        github: "https://github.com/drdreo/hub/tree/master/apps/gameserver/games/dicegame",
        tags: ["angular", "golang"],
    },
    {
        title: "lit-scss-loader",
        description:
            "A webpack loader plugin for easier SCSS handling for LitElement. Averaged at 1500 downloads / week",
        url: "https://www.npmjs.com/package/lit-scss-loader",
        github: "https://github.com/drdreo/lit-scss-loader",
        tags: ["webpack", "LitElement", "SCSS"],
    },
    {
        title: "Owe Drahn",
        description: "A dice roller gambling game to play with your friends.",
        url: "https://owe-drahn.drdreo.com/",
        github: "https://github.com/drdreo/owe-drahn",
        image: "/owe-drahn.png",
        tags: ["react", "nest.js", "Google OAuth"],
    },
    {
        title: "Habi",
        description: "A habit tracker web app. Simply track anything.",
        github: "https://habi.drdreo.com",
        image: "/habi.png",
        tags: ["angular", "golang", "auth0"],
    },
    {
        title: "Web Component prerendering",
        description:
            "My master thesis research to server-side render Web Components with a declarative shadow DOM.",
        url: "https://github.com/drdreo/wc-prerender",
        github: "https://github.com/drdreo/wc-prerender",
        tags: ['webcomponents', 'ssr' ],
    },
    {
        title: "RisikOnline",
        description:
            "An HTML multiplayer game based on the ruleset of the board game Risk. Never released sadly.",
        image: "/risk.png",
        github: "https://github.com/drdreo/risikonline",
        tags: ["angular", "node", "socket.io"],
    },
    {
        title: "fitzbrothers",
        description: "The homepage for my friends from the fitzbrothers band.",
        url: "https://fitzbrothers.at/",
        github: "https://github.com/drdreo/fitzbrothers",
        image: "/fitz.png",
        tags: ["nuxt.js"],
    },
    {
        title: "Fretello",
        description: "As a freelance project, I created the homepage and songs search application for Fretello.",
        url: "https://fretello.com/",
        image: "/fretello.png",
        tags: ["angular", "ssr"],
    },
    {
        title: "Electro Ultraways",
        description:
            "A ultraway slot machine. Fun project, created to experiment with React and odds.",
        url: "https://slot.drdreo.com/",
        github: "https://github.com/drdreo/electro-slot",
        image: "/slot.PNG",
        tags: ["react"],
    },
];
