import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEarthEurope, faPalette, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.fav}>
                    <p><FontAwesomeIcon icon={faEarthEurope} /> Artists from all over the world</p>
                    <p><FontAwesomeIcon icon={faPalette} /> Your artwork is secure and cherished here</p>
                    <p><FontAwesomeIcon icon={faHeart} /> Unleash your creativity with us</p>
                    <p><FontAwesomeIcon icon={faCopyright} /><strong>2024 - All rights reserved</strong></p>
                </div>
                <div className={styles.icons}>
                    <p><img src="/images/IconOne.jpg" /></p>
                    <p><img src="/images/IconTwo.jpg"/></p>
                    <p><img src="/images/IconThree.jpg"/></p>
                    <p><img src="/images/IconFour.jpg"/></p>
                </div>
            </div>
             
        </footer>
           
    );
}
