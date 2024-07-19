import styles from './ArtItem.module.css'


export default function ArtItem({_id, imageUrl, title}) {
    return (
        <div className={styles.artworkCard}>
            <img src={imageUrl} alt={title} className={styles.artworkImage} />
            <h2>{title}</h2>
            <button className={styles.detailsButton}>Details</button>
        </div>
    );
}