import { useState } from "react";
import Data from "./Data.json";

// Ref. code from W7Class1 - https://codesandbox.io/p/sandbox/functioncomponent-d4w6l7?file=%2Fsrc%2FApp.js%3A15%[…]ebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D
// Ref. https://www.kindacode.com/article/how-to-create-a-filter-search-list-in-react/
const SearchByName = () => {
  const [pets, setPets] = useState(Data);

  const filteredResults = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const filteredPets = pets.filter((pet) => {
        return pet.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
      });
      setPets(filteredPets);
    }
    else {
      setPets(Data)
    }
  }

  return (
    <div className="centerBox">
      <h1>My Pets by Name</h1>
      <input
        type="search"
        placeholder="Search Pet"
        onChange={filteredResults}
      />
      {pets.map((pet, index) => (
        <li key={index}>{pet.name}</li>
      ))}
    </div>
  );
};

export default SearchByName;
