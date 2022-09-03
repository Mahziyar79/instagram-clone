import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession, signIn, signOut } from "next-auth/react";

const Stories = () => {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();

  //   faker js
  useEffect(() => {
    const Users = [];

    function createRandomUser() {
      return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      };
    }

    Array.from({ length: 20 }).forEach(() => {
      Users.push(createRandomUser());
    });
    setUsers(Users);
  }, []);

  return (
    <div className="flex border border-gray-200 overflow-x-scroll p-6 md:mx-0 m-3 space-x-5 mt-8 rounded-sm bg-white scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session.user.image}
          username={session.user.username}
        />
      )}
      {users.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
