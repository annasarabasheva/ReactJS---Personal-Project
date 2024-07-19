import styles from './Gallery.module.css'
import { useEffect, useState } from "react";
import * as artService from "../../services/artService"
import ArtItem from "../gallery/art-item/ArtItem"

export default function Gallery() {

    const [arts, setArts] = useState([])

    useEffect(() => {
        artService.getAll()
            .then(result => setArts(result))
    }, [])

    return (
        <div className={styles.galleryContainer}>
            <h1>Gallery</h1>
            <div className={styles.artworkContainer}>

                {arts.map(art => (<ArtItem key={art._id}{...art}/>))}
               
            </div>
        </div>
    )
};