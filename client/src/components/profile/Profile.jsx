import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import * as artService from '../../services/artService';
import * as likeService from '../../services/likeService';
import styles from './Profile.module.css';

export default function Profile() {
    const { userID } = useContext(AuthContext);
    const [userArt, setUserArt] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError('');

            try {
                const userArtData = await artService.getByUser(userID);
                if (Array.isArray(userArtData)) {
                    setUserArt(userArtData);
                } else {
                    console.error('Unexpected data format for user art:', userArtData);
                    setUserArt([]);
                }

                const likedPostsData = await likeService.getLikedPosts(userID);
                if (Array.isArray(likedPostsData)) {
                    const arts = await Promise.all(
                        likedPostsData.map(like => {
                            if (!like.artID) {
                                console.error('Invalid like entry:', like);
                                return null;
                            }
                            return artService.getOne(like.artID);
                        })
                    );

                    const validArts = arts.filter(art => art && art._id);
                    setLikedPosts(validArts);
                } else {
                    console.error('Unexpected data format for liked posts:', likedPostsData);
                    setLikedPosts([]);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userID]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.profileContainer}>
            <h1>My Profile</h1>
            <div className={styles.myProfile}>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.personalContainer}>
                    <h2>My Personal Artwork</h2>
                    <ul className={styles.personalList}>
                        {userArt.length > 0 ? (
                            userArt.map(art => (
                                art && art._id ? (
                                    <li key={art._id}>
                                        <Link to={`/gallery/${art._id}/details`}>
                                            <img src={art.imageUrl} alt={art.title} />
                                            <h3>{art.title}</h3>
                                        </Link>
                                    </li>
                                ) : (
                                    <li key="placeholder">Invalid artwork data</li>
                                )
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
                                art && art._id ? (
                                    <li key={art._id}>
                                        <Link to={`/gallery/${art._id}/details`}>
                                            <img src={art.imageUrl} alt={art.title} />
                                            <h3>{art.title}</h3>
                                        </Link>
                                    </li>
                                ) : (
                                    <li key="placeholder">Invalid liked post data</li>
                                )
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
