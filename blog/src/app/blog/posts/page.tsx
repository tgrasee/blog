import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function BlogPosts() {
    return (
        <>
            <h1 className='text-4xl text-gray-700 font-bold mb-4'>Posts</h1>

            {/* Render the post component with the post data */}
            {posts.map((post) => <Post key={post.id} {...post} />)}
        </>
    );
}