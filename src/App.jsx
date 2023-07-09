import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Result from "./Result.jsx";

function App() {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <Navbar setFilteredData={setFilteredData} />
      <Result filteredData={filteredData} />
    </>
  );
}

export default App;
