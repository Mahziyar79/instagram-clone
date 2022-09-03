import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { FomeIcon, HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import {useRouter} from "next/router"

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="relative cursor-pointer hidden lg:inline-grid w-24" onClick={()=>router.push('/')}>
          <Image
            alt=""
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative cursor-pointer lg:hidden w-8 flex-shrink-0" onClick={()=>router.push('/')}>
          <Image
            alt=""
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle */}
        <div className="md:max-w-xs max-w-[180px]">
          <div className="mt-1 p-3 rounded-md relative">
            <div className="absolute inset-y-0 pl-3 pointer-events-none flex items-center">
              <SearchIcon className="w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 w-full pl-10 block sm:text-sm focus:ring-black focus:border-black border-gray-300 rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}

        <div className="flex items-center justify-end space-x-3">
          <HomeIcon onClick={()=>router.push('/')} className="navBtn" />
          <MenuIcon className="w-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <span className="absolute text-xs hidden md:flex bg-red-500 rounded-full items-center justify-center animate-pulse -top-1 -right-2 text-white w-5 h-5">
                  3
                </span>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                className="w-9 h-9 rounded-full cursor-pointer"
                src={session.user.image}
                alt="profile img"
              />
            </>
          ) : (
            <button onClick={signIn}>SignIn</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
