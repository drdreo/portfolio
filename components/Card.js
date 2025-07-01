import styles from "./Card.module.scss";

export function Card(props) {

    const {title, description, url, image, orientation = "top", github} = props;
    return (
        <a href={url} target="_blank" className={styles.card}
           style={{justifyContent: orientation === "top" ? "space-between" : ""}}>
            {image && orientation === "bot" &&
                <img className={styles.card__image}  src={image} alt="project snapshot"/>
            }
            <div className={styles.card__details}>
                <h3>{title} &rarr;</h3>
                <p>{description}</p>
                {github &&
                    <>
                        <br/>
                        <a href={github} target="_target">Github</a>
                    </>
                }
            </div>
            {image && orientation === "top" &&
                <img className={styles.card__image} src={image} alt="project snapshot"/>
            }
        </a>
    );
}
