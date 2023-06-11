const NoteInput = () => {
  return (
    <div className="container mx-auto justify-center items-center mt-6">
      <h1 className="text-2xl text-center text-secondary">Tambahkan catatan</h1>
      <form>
        <input
          type="text"
          placeholder="Judul"
          className="input input-bordered input-primary w-full mt-4 pl-6 text-slate-400"
        />
        <input
          type="text"
          placeholder="Apa yang ingin kamu catat?"
          className="input input-lg input-bordered input-primary w-full mt-4 min-h-[330px] pb-64 text-slate-400"
        />
      </form>
    </div>
  );
};

export default NoteInput;
