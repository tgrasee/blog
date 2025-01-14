import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default async function BlogPosts({ params }: { params: Promise<{ id: string }> }) {

    // Find the post with the id that matches the URL parameter
    const post = posts.find(async (post) => post.id === (await params).id);

    if (!post) {
        return <div>Post not found</div>;
    }
    return (
        <div>
            <h1 className='text-4xl text-gray-700 font-bold mb-4'>Post</h1>

            {/* Render the post component with the post data */}
            <Post {...post} />
        </div>
    );
}