import { useState } from 'react';
import styles from './CommentModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CommentModal({ isVisible, onClose, onSubmit }) {
    const [comment, setComment] = useState("");

    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(comment);
        setComment("");
    };

    const handleChange = (e) => {
        setComment(e.target.value);
    };



    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="comment">Add a comment:</label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        rows="7" 
                        value={comment}
                        onChange={handleChange}
                        required
                        placeholder="Give your feedback here..." 
                        style={{ fontSize: '35px' }}
                    ></textarea>
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
