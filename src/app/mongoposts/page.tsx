import getAllPosts from "@/lib/getAllPosts";
import PostPage from "./components/PostPage";

export default async function page() {
  const posts: Post[] = JSON.parse(await getAllPosts());
  return (
    <div className="text-4xl">
      <p>Posts are fetched from mongo database directly!</p>
      <br />
      {posts.map((post) => (
        <PostPage post={post} key={post.id} />
      ))}
    </div>
  );
}
