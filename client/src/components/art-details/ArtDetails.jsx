import styles from './ArtDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as artService from "../../services/artService";
import * as commentService from "../../services/commentService";
import CommentModal from './comment-modal/CommentModal';
import AuthContext from '../../contexts/authContext';

export default function ArtDetails() {
    const navigate = useNavigate();
    const { userID, isAuthenticated } = useContext(AuthContext);
    const [art, setArt] = useState({});
    const [comments, setComments] = useState([]);
    const { artID } = useParams();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        
        artService.getOne(artID)
            .then(artData => {
                setArt(artData);
            })
            .catch(err => console.error('Failed to fetch art details:', err));

      
        commentService.getAll(artID)
            .then(filteredComments => {
                setComments(filteredComments);
            })
            .catch(err => console.error('Failed to fetch comments:', err));
    }, [artID]);

    const handleAddCommentClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleCommentSubmit = async (commentText) => {
        try {
            const createdComment = await commentService.create(artID, commentText);
            setComments(prevComments => [...prevComments, createdComment]);
        } catch (err) {
            console.log(err);
        }

        setIsModalVisible(false);
    };


    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${art.title}`);

        if (hasConfirmed) {
            await artService.remove(artID);

            navigate('/gallery');
        }
    }
    
    const owner = art.owner || {};

    return (
        <div className={styles.detailsContainer}>
            <h1>Details</h1>
            <div className={styles.artBox}>
                <img src={art.imageUrl} alt={art.title} />
                <div className={styles.info}>
                    <div className={styles.text}>
                        <p>Title: <span>{art.title}</span></p>
                        <p>Created By: <span>{owner.username || 'Unknown'}</span></p>
                        <p>Category: <span>{art.category}</span></p>
                        <p>Description: <span>{art.description}</span></p>
                    </div>
                    <div className={styles.commentSection}>
                        <h3>Comment Section</h3>
                        <ul className={styles.comments}>
                            {comments.length > 0 ? (
                                comments.map(comment => (
                                    <li key={comment._id}>{comment.text}</li>
                                ))
                            ) : (
                                <p>No comments yet...</p>
                            )}
                        </ul>
                    </div>

                    {userID === art._ownerId && (
                        <div className={styles.buttons}>
                            <Link to={`/gallery/${artID}/edit`} className={styles.editButton}>Edit</Link>
                            <button onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                    )}

                    {userID !== art._ownerId && isAuthenticated && (
                        <div className={styles.extras}>
                            <button>5 <FontAwesomeIcon icon={faHeart} className={styles.iconStyle} /></button>
                            <button onClick={handleAddCommentClick} className={styles.comment}>Add a Comment</button>
                        </div>
                    )}
                </div>
            </div>
            <CommentModal
                isVisible={isModalVisible}
                onClose={handleModalClose}
                onSubmit={handleCommentSubmit}
            />
        </div>
    );
}
