import Navbar from "../../../Global/Navbar/navbar";
import "./header.css";
import SearchField from "../../search-field/search-field.component";

const Header = ({ searchAuthorButton }) => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find the book of your choice
          </h2>
          <SearchField searchAuthorButton={searchAuthorButton} />
        </div>
      </header>
    </div>
  );
};

export default Header;
