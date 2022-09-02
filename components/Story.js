const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full border-2 border-red-500 p-[1.5px] cursor-pointer object-contain hover:scale-110 transition-all ease-out duration-200"
        src={img}
        alt="story image"
      />
      <p className="text-center w-14 text-sm truncate">{username}</p>
    </div>
  );
};

export default Story;
