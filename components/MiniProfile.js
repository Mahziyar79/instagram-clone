import profileImg from "../public/images/image.jpg";


const MiniProfile = () => {
    return ( 
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={profileImg.src} alt="" className="w-16 h-16 rounded-full p-[2px] border" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">Mahziyar79</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
     );
}
 
export default MiniProfile;