import PropTypes from "prop-types";

function Result({ filteredData }) {
  return (
    <>
      <div className="flex flex-wrap justify-center p-4 m-4">
        {filteredData.map((item, index) => (
          <div
            key={item.id || item.filename || index}
            className="flex flex-col h-auto p-4 m-2 border-2 border-solid shadow-md custom-gradient border-customGray rounded-xl w-96"
          >
            <h2 className="text-lg font-medium text-center capitalize font-capras text-slate-700">
              {item.name["name-USen"]}
            </h2>
            <img
              src={item.image_uri}
              className="self-center max-w-xs mt-2 drop-shadow-lg"
              alt={item.name["name-USen"]}
            />
            <p className="text-center text-black font-ubuntu">
              {item["catch-phrase"]}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

Result.propTypes = {
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      filename: PropTypes.string,
      name: PropTypes.shape({
        "name-USen": PropTypes.string,
      }),
      image_uri: PropTypes.string,
      "catch-phrase": PropTypes.string,
    })
  ),
};

export default Result;
