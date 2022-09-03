import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestionsData, setSuggestionsData] = useState([]);

  //   faker js
  useEffect(() => {
    const suggestions = [];

    function createRandomUser() {
      return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        company : faker.company.companyName()
      };
    }

    Array.from({ length: 4 }).forEach(() => {
      suggestions.push(createRandomUser());
    });
    setSuggestionsData(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex items-center justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestionsData.map((suggestion) => (
        <div key={suggestion.userId} className="flex items-center mt-3 justify-between">
          <img
            src={suggestion.avatar}
            alt=""
            className="h-10 w-10 rounded-full p-[2px] border"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-xs text-gray-400">Works at {suggestion.company}</h3>
          </div>
          <button className="text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
