import styles from './ArtDetails.module.css'


export default function ArtDetails() {
    return (
        <div className={styles.detailsContainer}>
            <h1>Details</h1>
            <div className={styles.artBox}>
                <img src="/images/FlowerGirl.jpeg" alt="title" />
                <div className={styles.info}>
                    <p>Title: <span> Flowers in her eyes</span></p>
                    <p>Category: <span> Portrait</span></p>
                    <p>Description: <span> Spring in the eyes of young girl</span></p>
                </div>
            
            </div>
            
        </div>
    );
}