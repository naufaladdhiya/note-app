const SearchNote = ({ onChangeHandler, keyword }) => {
  return (
    <div className="input-note">
      <h2 className="text-center text-2xl text-blue-400">Daftar Catatan</h2>
      <input
        type="text"
        placeholder="Find your note..."
        className="input input-bordered input-sm input-primary w-full max-w-7xl mt-3"
        onChange={onChangeHandler}
        value={keyword}
      />
    </div>
  );
};

export default SearchNote;
