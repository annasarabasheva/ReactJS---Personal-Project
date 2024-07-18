import styles from './Gallery.module.css'

export default function Gallery() {
    return (
        <div className={styles.galleryContainer}>
            <h1>Gallery</h1>
            <div className={styles.artworkContainer}>
            <div className={styles.artworkCard}>
                    <img src="https://i.pinimg.com/236x/4e/3f/b4/4e3fb469c93d8b63c2758e36068c0979.jpg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="https://i.pinimg.com/564x/20/6f/97/206f9760e79cd50c79965a522f452915.jpg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="https://i.pinimg.com/236x/28/22/06/282206930cb09a01128be25c77699b5c.jpg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="https://i.pinimg.com/236x/af/44/2b/af442bc21b26aed265896b0580ab8a4b.jpg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="https://i.pinimg.com/236x/a8/cb/51/a8cb51cf9a3b37e327007afaa483283c.jpg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="https://i.pinimg.com/236x/ae/ef/58/aeef589975c7ba1f879a3c6a65f7bec2.jpg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="/images/GirlDrawing.jpeg" alt="Little Yellow Dress" className={styles.artworkImage} />
                    <h2>Little yellow dress</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="/images/Space.jpeg" alt="Colorful Dreams" className={styles.artworkImage} />
                    <h2>Colorful Dreams</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="/images/FlowerGirl.jpeg" alt="Whimsical Forest" className={styles.artworkImage} />
                    <h2>Whimsical Forest</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
                <div className={styles.artworkCard}>
                    <img src="/images/HristiyanEye.jpeg" alt="Ocean Serenity" className={styles.artworkImage} />
                    <h2>Ocean Serenity</h2>
                    <button className={styles.detailsButton}>Details</button>
                </div>
               
            </div>
        </div>
    )
};