import React from "react";
import PropTypes from "prop-types";

function SearchNote({ searchTitle, onTitleChange }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Cari judul..." defaultValue={searchTitle} onChange={(event) => onTitleChange(event.target.value)}></input>
    </div>
  );
}

SearchNote.propTypes = {
  searchTitle: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};

export default SearchNote;
