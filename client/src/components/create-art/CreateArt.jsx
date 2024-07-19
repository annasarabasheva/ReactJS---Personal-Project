import styles from './CreateArt.module.css';

export default function CreateArt() {
    return (
        <div className={styles.createContainer}>
            <div className={styles.container}>
                <h1>Share your own Art</h1>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Title of your work.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">Category:</label>
                        <select id="category" name="category">
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
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL.." />
                        <div className={styles.helperText}>
                            <p>Don't have a URL? <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">Click here to upload your image</a> and get a URL.</p>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" placeholder="Write something about your art here..." rows="5" />
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                </form>
            </div>
        </div>
    );
}
