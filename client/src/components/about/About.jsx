import ArtItem from '../gallery/art-item/ArtItem';
import styles from './About.module.css'
import * as artService from "../../services/artService"
import { useEffect, useState } from "react";

export default function About() {
    const [latestArt, setLatestArt] = useState([]);

    useEffect(() => {
        artService.getLatest()
            .then(result => setLatestArt(result))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={styles.aboutContainer}>
            <h1>Welcome to our little Art Community</h1>
            <p>Join a vibrant community where you can share your artwork with the world, connect with fellow artists, and showcase your creativity. Here, you can explore diverse styles and mediums, gain valuable feedback, and find inspiration for your own projects. Whether you’re a seasoned artist or just starting out, our platform offers the perfect space to grow and express yourself. You’ll be able to comment on other users' artwork, receive feedback, and develop your skills as an artist. Together, we can celebrate the beauty of art and inspire one another to reach new heights.</p>
            <p>Here are some of our latest masterpieces created by talented users:</p>
            <div className={styles.artworkContainer}>
                {latestArt.map(art => (<ArtItem key={art._id} {...art} />))}
                {latestArt.length === 0 && <h3 className={styles.noArts}>There are no publications at this moment...Stay tuned!</h3>}
            </div>
        </div>
    );
}
