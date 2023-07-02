function MovieList() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Spider-Man: Across the Spider-Verse</td>
          </tr>
          <tr>
            <th>2</th>
            <td>The Super Mario Bros. Movie</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Suzume</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
