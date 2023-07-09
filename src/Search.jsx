import { useEffect } from "react";
import PropTypes from "prop-types";

function Search({ category, setCategory, searchTerm, setSearchTerm, setData }) {
  useEffect(() => {
    if (category) {
      const apiUrl = `http://acnhapi.com/v1/${category}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(Object.values(data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [category, setData]);

  return (
    <div className="flex items-center justify-between gap-1 text-black font-ubuntu">
      <input
        type="text"
        id="searchBar"
        placeholder="Search by name..."
        className="block rounded-sm"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // Perform search logic here if needed
          }
        }}
      />
      <select
        id="categorySelect"
        className="block rounded-sm font-ubuntu"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Select a category</option>
        <option value="fish">Fish</option>
        <option value="bugs">Bugs</option>
        <option value="sea">Sea Creatures</option>
        <option value="fossils">Fossils</option>
        <option value="art">Art</option>
      </select>
      <select id="hemisphereSelect" className="block rounded-sm font-ubuntu">
        <option value="">Select a hemisphere</option>
        <option value="northern">Northern Hemisphere</option>
        <option value="southern">Southern Hemisphere</option>
      </select>
    </div>
  );
}

Search.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setData: PropTypes.func.isRequired,
};

export default Search;
