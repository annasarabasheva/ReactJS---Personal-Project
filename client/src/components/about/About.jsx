import styles from './About.module.css'


export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1>Welcome to our little Art Community</h1>
            <p>Join a vibrant community where you can share your artwork with the world, connect with fellow artists, and showcase your creativity. Here, you can explore diverse styles and mediums, gain valuable feedback, and find inspiration for your own projects. Whether you’re a seasoned artist or just starting out, our platform offers the perfect space to grow and express yourself. You’ll be able to comment on other users' artwork, receive feedback, and develop your skills as an artist. Together, we can celebrate the beauty of art and inspire one another to reach new heights.</p>
            <p>Here are some of our latest masterpieces created by talented users:</p>

            <div className={styles.artworkContainer}>
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

        
    );
}