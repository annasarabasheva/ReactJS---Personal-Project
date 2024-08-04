import styles from "./ConfirmationModal.module.css"
export default function ConfirmationModal({ isVisible, onClose, onConfirm, title }) {
   
    if (!isVisible) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{title}</h2>
                <div className={styles.modalButtons}>
                    <button onClick={onConfirm} className={styles.confirmButton}>Yes, Delete</button>
                    <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
