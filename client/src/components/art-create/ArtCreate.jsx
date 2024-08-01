import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArtCreate.module.css';
import * as artService from '../../services/artService';

export default function ArtCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: 'landscape',
        imageUrl: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const createArtSubmitHandler = async (e) => {
        e.preventDefault();
        
        try {
            await artService.create(formData);
            navigate('/gallery');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.createContainer}>
            <div className={styles.container}>
                <h1>Share your own Art</h1>
                <form onSubmit={createArtSubmitHandler}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Title of your work.."
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            <option value="landscape">Landscape</option>
                            <option value="portrait">Portrait</option>
                            <option value="abstract">Abstract</option>
                            <option value="still-life">Still Life</option>
                            <option value="digital-art">Digital Art</option>
                            <option value="traditional-art">Traditional Art</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleInputChange}
                            placeholder="Enter image URL.."
                        />
                        <div className={styles.helperText}>
                            <p>Don't have a URL? <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">Click here to upload your image</a> and get a URL.</p>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Write something about your art here..."
                            rows="5"
                        />
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                </form>
            </div>
        </div>
    );
}
