import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Search from "./Search.jsx";
import acLeafLogo from "./assets/ACLeaf.svg";

function Navbar({ setFilteredData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);

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
  }, [category]);

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.name["name-USen"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm, data, setFilteredData]);

  return (
    <>
      <nav
        id="searchbar"
        className="top-0 left-0 z-20 w-full bg-customGray opacity-80"
      >
        <div className="flex items-center justify-between p-4">
          <a className="flex items-center">
            <img className="h-10" src={acLeafLogo} alt="ACLeaf Logo" />
            <span className="self-center text-lg uppercase text-slate-800 font-capras whitespace-nowrap">
              ACNH
            </span>
          </a>
          <Search
            category={category}
            setCategory={setCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setData={setData}
          />
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  setFilteredData: PropTypes.func.isRequired,
};

export default Navbar;
