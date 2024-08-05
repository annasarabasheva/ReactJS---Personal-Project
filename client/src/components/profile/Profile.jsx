import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import * as artService from '../../services/artService';
import * as likeService from '../../services/likeService'; // Import likeService
import styles from './Profile.module.css';

export default function Profile() {
    const { userID } = useContext(AuthContext);
    const [userArt, setUserArt] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        // Fetch the user's artwork
        artService.getByUser(userID)
            .then(userArtData => {
                setUserArt(userArtData);
            })
            .catch(err => console.error('Failed to fetch user art:', err));
        
        // Fetch the posts liked by the user
        likeService.getLikedPosts(userID)
            .then(likedPostsData => {
                // Fetch the full art details for each liked post
                Promise.all(likedPostsData.map(like =>
                    artService.getOne(like.artID)
                ))
                .then(arts => {
                    setLikedPosts(arts);
                })
                .catch(err => console.error('Failed to fetch art details:', err));
            })
            .catch(err => console.error('Failed to fetch liked posts:', err));
    }, [userID]);

    return (
        <div className={styles.profileContainer}>
            <h1>My Profile</h1>
            <div className={styles.myProfile}>
                <div className={styles.personalContainer}>
                    <h2>My Personal Artwork</h2>
                    <ul className={styles.personalList}>
                        {userArt.length > 0 ? (
                            userArt.map(art => (
                                <li key={art._id}>
                                    <img src={art.imageUrl} alt={art.title} />
                                </li>
                            ))
                        ) : (
                            <p className={styles.noPosts}>You have not created any posts yet.</p>
                        )}
                    </ul>
                </div>

                <div className={styles.likedContainer}>
                    <h2>Posts Liked by Me</h2>
                    <ul className={styles.likedList}>
                        {likedPosts.length > 0 ? (
                            likedPosts.map(art => (
                                <li key={art._id}>
                                    <img src={art.imageUrl} alt={art.title} />
                                </li>
                            ))
                        ) : (
                            <p className={styles.noPosts}>You have not liked any posts yet.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
