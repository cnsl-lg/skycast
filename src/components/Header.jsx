import SearchLocation from "./SearchLocation";

const Header = ({ handleAddLocation, location, setLocation }) => {
  return (
    <header>
      <SearchLocation handleAddLocation={handleAddLocation} location={location} setLocation={setLocation}/>
    </header>
  );
}

export default Header;