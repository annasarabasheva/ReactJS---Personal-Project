import styles from './ArtItem.module.css';
import {Link} from "react-router-dom";


export default function ArtItem({_id, imageUrl, title}) {
    return (
        <div className={styles.artworkCard}>
            <img src={imageUrl} alt={title} className={styles.artworkImage} />
            <h2>{title}</h2>
            <Link to={`/gallery/${_id}/details`} className={styles.detailsButton}>
            Details
            </Link>
        </div>
    );
}