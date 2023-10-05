import { useContext } from "react";
import { AboutLocation } from "../App";

const SearchLocation = ({ handleAddLocation, setLocation }) => {
  const { location } = useContext(AboutLocation)

  return (
    <div className="SearhLocation flex">
      <label htmlFor="location" className="flex w-full">
        <input 
          type="text"
          id="location"
          className=" w-full p-2 rounded-s-xl border-4 border-sky-800 focus:outline-none focus:ring focus:ring-sky-700"
          placeholder="Enter location"
          value={location === 'jakarta' ? '' : location}
          onChange={e => setLocation(e.target.value)}
          onKeyUp={e => {
            if(e.keyCode === 13) {
              handleAddLocation(location)
              setLocation('')
            }
          }} />
      </label>
      <button
        type="button"
        className="flex-none text-white fontsem py-2 px-3 rounded-e-xl bg-sky-800 hover:bg-sky-700 active:bg-sky-600 focus:outline-none"
        onClick={() => {
          handleAddLocation(location)
          setLocation('')
        }}>
        <i className="ri-search-line"></i>
      </button>
    </div>
  );
}

export default SearchLocation;