import { FC } from "react";
import styles from "./Welcome.module.scss";

export const Welcome: FC = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Welcome,
                <br />I am Andreas Hahn
            </h1>
        </div>
    );
};
