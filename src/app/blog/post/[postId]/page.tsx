import getSortedPostsData from "@/lib/getSortedPostsData";
import { notFound } from "next/navigation";
import ProfilePic from "../../components/ProfilePic";

type Params = {
  params: Promise<{ postId: string }>;
};

export default async function IndevidualPost({ params }: Params) {
  const { postId } = await params;
  const allPosts = await getSortedPostsData();
  const postItem = allPosts.find((post) => post._id === postId);

  if (!postItem) notFound();
  return (
    <div>
      <div className="p-3 m-3 flex justify-center items-center gap-5 md:flex-col">
        <ProfilePic />
        <p className="text-3xl mt-10 mb-10 text-center">
          Hello and Welcome, 👋 &nbsp;
          <span className="whitespace-nowrap">I am Zaza</span>
        </p>
      </div>
      <div className="text-4xl p-3 m-3">
        {/*       <p>Post Name: {postId}</p> */}
        <p className="text-xl">{postItem.date}</p>
        <br />
        <p>{postItem.title}</p>
        <br />
        <p className="text-2xl">{postItem?.body}</p>
      </div>
    </div>
  );
}
