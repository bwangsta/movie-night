function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2 p-4">
      <p>Movie Night</p>
      <input
        type="search"
        placeholder="Search movies..."
        className="rounded-full bg-slate-700 p-2 outline-none"
      />
      <div className="rounded-full bg-slate-700 p-2">
        <span>BW</span>
      </div>
    </nav>
  )
}

export default Navbar
