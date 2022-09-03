import Post from "./Post";
import profileImg from "../public/images/image.jpg";
import marketing from "../public/images/marketing.jpg";

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
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
