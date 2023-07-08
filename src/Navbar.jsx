import { useState, useEffect } from "react";
import Search from "./Search.jsx";
import acLeafLogo from "./assets/ACLeaf.svg";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.name["name-USen"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm, data]);

  return (
    <nav
      id="searchbar"
      className="fixed top-0 left-0 z-20 w-full bg-emerald-900"
    >
      <div className="flex items-center justify-between p-4">
        <a className="flex items-center">
          <img className="h-10" src={acLeafLogo} alt="ACLeaf Logo" />
          <span className="self-center text-lg text-white uppercase font-capras whitespace-nowrap">
            ACNH Critterpedia
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
      <div className="flex flex-wrap p-4">
        {filteredData.map((item) => (
          <div key={item.id} className="p-4 m-2 bg-white rounded shadow">
            <h2 className="text-lg font-medium">{item.name["name-USen"]}</h2>
            <img
              src={item.image_uri}
              alt={item.name["name-USen"]}
              className="w-auto h-40 mt-2"
            />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
