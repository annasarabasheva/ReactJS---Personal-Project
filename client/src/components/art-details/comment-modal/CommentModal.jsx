import { useState } from 'react';
import styles from './CommentModal.module.css';

export default function CommentModal({ isVisible, onClose, onSubmit }) {
    const [comment, setComment] = useState("");

    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(comment);
        setComment("");  // Clear the textarea after submission
    };

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="comment">Your Comment:</label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        rows="10" 
                        value={comment}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
