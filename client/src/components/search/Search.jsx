import { useState, useEffect } from 'react';
import * as artService from '../../services/artService';
import styles from './Search.module.css'
import ArtItem from '../gallery/art-item/ArtItem';

const categories = [
    'landscape',
    'portrait',
    'abstract',
    'still-life',
    'digital-art',
    'traditional-art',
];

export default function Search() {
    const [allArtworks, setAllArtworks] = useState([]);
    const [filteredArtworks, setFilteredArtworks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    useEffect(() => {
        async function fetchArtworks() {
            try {
                const result = await artService.getAll();
                setAllArtworks(result);
                setFilteredArtworks(result);
            } catch (err) {
                console.error('Failed to fetch artworks:', err);
            } 
        }
        fetchArtworks();
    }, []);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        if (category === '') {
            setFilteredArtworks(allArtworks);
        } else {
            const filtered = allArtworks.filter(art => art.category === category);
            setFilteredArtworks(filtered);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
                <label htmlFor="category">Select Category:</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.artGallery}>
                {allArtworks.length === 0 ? (
                    <p className={styles.noArtMessage}>
                        No posts yet.
                    </p>
                ) : filteredArtworks.length > 0 ? (
                    filteredArtworks.map(art => (
                        <ArtItem
                            key={art._id}
                            _id={art._id}
                            imageUrl={art.imageUrl}
                            title={art.title}
                        />
                    ))
                ) : (
                    <p className={styles.noArtMessage}>
                        Nothing yet, Stay tuned...
                    </p>
                )}
            </div>
        </div>
    );
}
