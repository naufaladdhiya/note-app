const SearchNote = ({ onChangeHandler, keyword }) => {
  return (
    <div className="input-note">
      <input
        type="text"
        placeholder="Temukan catatan..."
        className="input input-bordered input-md input-primary w-full max-w-7xl mt-3"
        onChange={onChangeHandler}
        value={keyword}
        title="Cari Catatan"
      />
    </div>
  );
};

export default SearchNote;
