import { useEffect, useState } from "react";
import styles from "../art-create/ArtCreate.module.css";
import { useParams, useNavigate } from "react-router-dom";
import * as artService from "../../services/artService";

const validate = (formData) => {
    const errors = {};

    if (!formData.title.trim()) {
        errors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
        errors.description = 'Description is required';
    }

    if (!formData.imageUrl.trim()) {
        errors.imageUrl = 'Image URL is required';
    } else {
        const urlPattern = /^https?:\/\//;
        if (!urlPattern.test(formData.imageUrl)) {
            errors.imageUrl = 'Image URL must be a valid URL';
        }
    }

    return errors;
};

export default function ArtEdit() {
    const { artID } = useParams();
    const navigate = useNavigate();
    const [art, setArt] = useState({
        title: '',
        category: 'landscape',
        imageUrl: '',
        description: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        artService.getOne(artID)
            .then(result => {
                setArt(result);
            })
            .catch(err => console.error('Failed to fetch art details:', err));
    }, [artID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArt(prevArt => ({
            ...prevArt,
            [name]: value
        }));
        setErrors(prevState => ({ ...prevState, [name]: '' })); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(art);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await artService.edit(artID, art);
                navigate(`/gallery/${artID}/details`);
            } catch (err) {
                console.error('Failed to update art:', err);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className={styles.createContainer}>
            <div className={styles.container}>
                <h1>Edit Your Art</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={art.title}
                            onChange={handleChange}
                            placeholder="Title of your work.."
                        />
                        {errors.title && <p className={styles.error}>{errors.title}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            value={art.category}
                            onChange={handleChange}
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
                            value={art.imageUrl}
                            onChange={handleChange}
                            placeholder="Enter image URL.."
                        />
                        {errors.imageUrl && <p className={styles.error}>{errors.imageUrl}</p>}
                        <div className={styles.helperText}>
                            <p>Don't have a URL? <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">Click here to upload your image</a> and get a URL.</p>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={art.description}
                            onChange={handleChange}
                            placeholder="Write something about your art here..."
                            rows="5"
                        />
                        {errors.description && <p className={styles.error}>{errors.description}</p>}
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                </form>
            </div>
        </div>
    );
}
