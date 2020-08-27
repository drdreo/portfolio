import styles from "./Work.module.scss";
import {Card} from "./Card";

export function Work() {

    const projects = [
        {
            title: "NIX Wallet",
            description: "The first NIX web wallet for easy, seed-based browser access to your NIX coins.",
            url: "https://webwallet.nixplatform.io/",
            image: "/nix_wallet.png"
        },
        {
            title: "RisikOnline",
            description: "An HTML multiplayer game based on the ruleset of the board game Risk. Never released sadly.",
            url: "https://risikonline.herokuapp.com/",
            image: "/risk.png"
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
            description: "A dice roller gambling game to play with your friends.",
            url: "https://owe-drahn.herokuapp.com/",
            github: "https://github.com/drdreo/owe-drahn",
            image: "/owe-drahn.png"
        },
        {
            title: "Poker",
            description: "A simple lobby based Poker game to play with your friends. Emerged due to COVID and the social distancing rules. Work still in progress",
            github: "https://github.com/drdreo/poker",
            image: "/poker.png"
        },
        {
            title: "fitzbrothers",
            description: "The homepage for my friends from the fitzbrothers band.",
            url: "https://fitzbrothers.at/",
            github: "https://github.com/drdreo/fitzbrothers",
            image: "/fitz.png"
        },
        {
            title: "Fretello",
            description: "The homepage and songs search application for Fretello.",
            url: "https://fretello.com/",
            image: "/fretello.png"
        },
        {
            title: "Funkography",
            description: "A photographer portfolio website. First prototype. Work still in progress.",
            url: "https://funkography.netlify.app/",
            github: "https://github.com/drdreo/funkography",
            image: "/funky.png"
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
