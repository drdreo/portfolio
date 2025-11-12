import { SiGithub, SiLinkedin } from "react-icons/si";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a
                    href="https://www.linkedin.com/in/andreas-k-hahn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <SiLinkedin />
                </a>
                <a href="https://github.com/drdreo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <SiGithub />
                </a>
            </div>
            <p className={styles.copyright}>© {new Date().getFullYear()} Andreas Hahn. All rights reserved.</p>
        </footer>
    );
};
