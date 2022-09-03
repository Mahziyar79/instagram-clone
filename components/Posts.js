import Post from "./Post";
import profileImg from "../public/images/image.jpg";
import marketing from "../public/images/marketing.jpg";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const posts = [
  {
    id: "123",
    username: "Mahziyar",
    userImg: profileImg,
    img: marketing,
    caption:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
  },
  {
    id: "124",
    username: "Mahziyar79",
    userImg: profileImg,
    img: marketing,
    caption:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
  },
  {
    id: "125",
    username: "Mahziyar Glp",
    userImg: profileImg,
    img: marketing,
    caption:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <>
          <Post key={post.id} post={post} />
          {console.log(post.data())}
        </>
      ))}
    </div>
  );
};

export default Posts;
