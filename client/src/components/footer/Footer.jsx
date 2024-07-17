import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright, faEarthEurope, faPalette, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <p><FontAwesomeIcon icon={faCopyright} /> 2024 - All rights reserved</p>
            <p><FontAwesomeIcon icon={faEarthEurope} /> Artists from all over the world</p>
            <p><FontAwesomeIcon icon={faPalette} /> Your artwork is secure and cherished here</p>
            <p><FontAwesomeIcon icon={faHeart} /> Unleash your creativity with us</p>
        </footer>
    );
}