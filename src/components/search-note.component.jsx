import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/localization.context";

function SearchNote({ onChangeHandler, keyword }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="input-note">
      <input
        type="text"
        placeholder={locale === "id" ? "Cari catatan..." : "Search note..."}
        className="w-full mt-3 input input-bordered input-md input-primary max-w-7xl"
        onChange={onChangeHandler}
        value={keyword}
        title={locale === "id" ? "Cari catatan..." : "Search note..."}
      />
    </div>
  );
}

export default SearchNote;

SearchNote.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
