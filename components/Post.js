import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";

const Post = ({ post }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", post.id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, post.id]);

  useEffect(() => {
    onSnapshot(collection(db, "posts", post.id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    );
  }, [db, post.id]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const sendComment = async (e) => {
    e.preventDefault();
    if (comment) {
      const commentToSend = comment;
      setComment("");
      await addDoc(collection(db, "posts", post.id, "comments"), {
        comment: commentToSend,
        username: session.user.username,
        userImage: session.user.image,
        timestamp: serverTimestamp(),
      });
    }
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  return (
    <div className="border bg-white my-7 rounded-sm mx-3 md:mx-0">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={post.data().profileImg}
          className="h-12 rounded-full object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{post.data().username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* Img */}
      <img src={post.data().image} className="object-cover w-full" alt="" />

      {/* buttons */}
      {session && (
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="flex items-center space-x-3">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <p className="truncate p-4">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{post.data().username}</span>
        {post.data().caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="flex items-center space-x-2 mb-3"
              >
                <img
                  className="h-7 rounded-full"
                  src={comment.data().userImage}
                  alt=""
                />
                <p className="text-sm flex-1">
                  <span className="font-bold">{comment.data().username}</span>{" "}
                  {comment.data().comment}
                </p>
                <Moment className="pr-5 text-xs" fromNow>
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4" onSubmit={sendComment}>
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="border-none flex-1 outline-none focus:ring-0"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button disabled={!comment} className="font-semibold text-blue-400" type="submit">
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
