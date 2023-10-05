import SearchLocation from "./SearchLocation";

const Header = ({ handleAddLocation, setLocation }) => {
  return (
    <header>
      <SearchLocation handleAddLocation={handleAddLocation} setLocation={setLocation}/>
    </header>
  );
}

export default Header;