import styles from './ArtDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function ArtDetails() {
    return (
        <div className={styles.detailsContainer}>
            <h1>Details</h1>
            <div className={styles.artBox}>
                <img src="/images/FlowerGirl.jpeg" alt="title" />
                <div className={styles.info}>
                    <div className={styles.text}>
                        <p>Title: <span> Flowers in her eyes</span></p>
                        <p>Created By: <span> annabanana</span></p>
                        <p>Category: <span> Portrait</span></p>
                        <p>Description: <span> Spring in the eyes of young girl</span></p>
                    </div>
                    <div className={styles.commentSection}>
                        <h3>Comment Section</h3>
                        <ul className={styles.comments}>
                            <li>Nice</li>
                            <li>Amazingly drawns bravooo</li>
                            <li>Incredible</li>
                            <li>You are an amazing artist</li>
                        </ul>
                    </div>

                    {/* VISIBLE ONLY FOR THE CREATOR
                    <div className={styles.buttons}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div> 
                    */}

                    {/* VISIBLE FOR LOGGED-IN USERS*/}
                    <div className={styles.extras}>
                        <button>5 <FontAwesomeIcon icon={faHeart} className={styles.iconStyle}/></button>
                        <button className={styles.comment}>Add a Comment</button>
                        
                    </div> 
                    
                    
                    
                </div>
            </div>
        </div>
    );
}
