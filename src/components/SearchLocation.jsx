import { useContext } from "react";
import { AboutLocation } from "../App";

const SearchLocation = ({ handleAddLocation, setLocation }) => {
  const { location } = useContext(AboutLocation)

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="location" className="form_input_label">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="text"
          id="location"
          className="form_input"
          placeholder="Search the location"
          value={location === 'indonesia' ? '' : location}
          onChange={e => setLocation(e.target.value)}
          onKeyUp={e => {
            if(e.keyCode === 13) {
              handleAddLocation(location)
              setLocation('')
            }
          }} />
        <button
          type="button"
          className="form_button"
          onClick={() => {
            handleAddLocation(location)
            setLocation('')
          }}>Search</button>
      </div>
    </form>
  );
}

export default SearchLocation;