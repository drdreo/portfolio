import styles from "./Work.module.scss";
import {Card} from "./Card";

export function Work() {

    const projects = [
        {
            title: "NIX Wallet",
            description: "The first NIX (now mute coin) web wallet for easy, seed-based browser access to your NIX coins. <angular>",
            url: "https://webwallet.nixplatform.io/",
            image: "/nix_wallet.png"
        },
        {
            title: "Poker",
            description: "A simple lobby based Poker game to play with your friends. Emerged due to COVID and the social distancing rules. Work still in progress <angular, nest.js>",
            github: "https://github.com/drdreo/poker",
            image: "/poker.png"
        },
        {
            title: "lit-scss-loader",
            description: "A webpack loader plugin for easier SCSS handling for LitElement. Average of 1500 downloads / week",
            url: "https://www.npmjs.com/package/lit-scss-loader",
            github: "https://github.com/drdreo/lit-scss-loader"
        },
        {
            title: "Web Component prerendering",
            description: "My research environment to server-side render Web Components.",
            url: "https://github.com/drdreo/wc-prerender"
        },
        {
            title: "Owe Drahn",
            description: "A dice roller gambling game to play with your friends. <react, socket.io>",
            url: "https://owe-drahn.herokuapp.com/",
            github: "https://github.com/drdreo/owe-drahn",
            image: "/owe-drahn.png"
        },
        {
            title: "RisikOnline",
            description: "An HTML multiplayer game based on the ruleset of the board game Risk. Never released sadly. <angular, node, socket.io>",
            url: "https://risikonline.herokuapp.com/",
            image: "/risk.png"
        },
        {
            title: "fitzbrothers",
            description: "The homepage for my friends from the fitzbrothers band. <nuxt.js>",
            url: "https://fitzbrothers.at/",
            github: "https://github.com/drdreo/fitzbrothers",
            image: "/fitz.png"
        },
        {
            title: "Fretello",
            description: "The homepage and songs search application for Fretello. <angular>",
            url: "https://fretello.com/",
            image: "/fretello.png"
        },
        {
            title: "RatCat",
            description: "A hosted configuration service. Manage configuration in one place, in real-time. <angular, nx>",
            github: "https://github.com/throw-if-null/cat",
            image: "/ratcat.png"
        },
        {
            title: "Electro Ultraways",
            description: "A ultraway slot machine. Fun project, created to experiment with React. <react>",
            url: "https://electro-slot.herokuapp.com/",
            github: "https://github.com/drdreo/electro-slot",
            image: "/slot.png"
        },
        {
            title: "Funkography",
            description: "A photographer portfolio website. First prototype. Work still in progress. <nuxt.js>",
            url: "https://funkography.netlify.app/",
            github: "https://github.com/drdreo/funkography",
            image: "/funky.png"
        },
        {
            title: "Reddit Clone",
            description: "A very simple reddit clone. <angular>",
            url: "https://better-reddit.herokuapp.com/",
            github: "https://github.com/drdreo/better-reddit",
            image: "/reddit.png"
        }

    ];
    return (
        <div className={styles.container}>
            <div className={styles.grid}>

                {projects.map((project, idx) =>
                                  <Card title={project.title}
                                        description={project.description}
                                        image={project.image}
                                        url={project.url}
                                        github={project.github}
                                        orientation={idx % 2 === 0 ? "bot" : "top"}/>
                )}
            </div>
        </div>
    );
}
