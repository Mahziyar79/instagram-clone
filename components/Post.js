import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ post }) => {
  return (
    <div className="border bg-white my-7 rounded-sm mx-3 md:mx-0">
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={post.data().profileImg} className="h-12 rounded-full object-contain border p-1 mr-3" alt="" />
        <p className="flex-1 font-bold">{post.data().username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* Img */}
      <img src={post.data().image} className="object-cover w-full" alt="" />

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center space-x-3">
            <HeartIcon className="btn"/>
            <ChatIcon className="btn"/>
            <PaperAirplaneIcon className="btn"/>
        </div>
        <BookmarkIcon className="btn"/>
      </div>

      {/* caption */}
      <p className="truncate p-4">
        <span className="font-bold mr-1">{post.data().username}</span>
        {post.data().caption} 
      </p>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input type="text" placeholder="Add a comment..." className="border-none flex-1 outline-none focus:ring-0" />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
