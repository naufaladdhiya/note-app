const SearchNote = ({ onChangeHandler, keyword }) => {
  return (
    <div className="input-note">
      <h2 className="text-center text-2xl text-blue-400">Daftar Catatan</h2>
      <input
        type="text"
        placeholder="Temukan catatan..."
        className="input input-bordered input-sm input-primary w-full max-w-7xl mt-3"
        onChange={onChangeHandler}
        value={keyword}
        title="Cari Catatan"
      />
    </div>
  );
};

export default SearchNote;
