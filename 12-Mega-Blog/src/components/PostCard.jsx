import appwriteServiceInstance from '../appwrite/config'
import {Link} from 'react-router-dom'
function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                    src={appwriteServiceInstance.getFilePreview(featuredImage)}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard