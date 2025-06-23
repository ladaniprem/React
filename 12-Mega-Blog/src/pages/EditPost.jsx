import { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import appwriteServiceInstance from '../appwrite/config'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        appwriteServiceInstance.getPost(slug)
            .then((post) => {
                if (post) {
                    setPost(post);
                }
                else {
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
            });
    }, [slug, navigate]); 
  
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
