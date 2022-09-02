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
        <img src={post.userImg.src} className="h-12 rounded-full object-contain border p-1 mr-3" alt="" />
        <p className="flex-1 font-bold">{post.username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* Img */}
      <img src={post.img.src} className="object-cover w-full" alt="" />

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

      {/* comments */}

      {/* input box */}
    </div>
  );
};

export default Post;
