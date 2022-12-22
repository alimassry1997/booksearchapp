import { DebounceInput } from "react-debounce-input";

const SearchField = ({ searchAuthorButton }) => {
  return (
    <div className="search-form-elem flex flex-sb bg-white">
      <DebounceInput
        debounceTimeout={500}
        onChange={searchAuthorButton}
        className="form-control"
        placeholder="Search for an author..."
        type="search"
      />
    </div>
  );
};

export default SearchField;
