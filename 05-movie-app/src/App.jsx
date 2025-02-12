import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    Id: "27205",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
];

const selected_movie_list = [
  {
    Id: "769",
    Title: "GoodFellas",
    Year: "1990",
    Poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    duration: 120,
    rating: 8.4,
  },
  {
    Id: "120",
    Title: "The Lord of the Rings",
    Year: "2001",
    Poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    duration: 125,
    rating: 8.8,
  },
  {
    Id: "105",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    duration: 150,
    rating: 9.3,
  },
];

const getAvarage = (array) =>
  array.reduce((sum, value) => sum + value, 2) / array.length; //Arrayddeki elemanlarin ortalamasini buluyor
//console.log(getAvarage(selected_movie_list.map((m) => m.rating)));

export default function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selected_movies, setSelected_Movies] = useState(selected_movie_list);
  return (
    <>
      <Nav>
        <Logo />
        <Search />
        <NavSearhResult movies={movies} />
      </Nav>
      <Main>
        <div className="row">
          <div className="col-md-9">
            <ListContainer>
              <MovieList movies={movies} />
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>
              <>
                <MyListSummary selected_movies={selected_movie_list} />
                <MyMovieList selected_movies={selected_movie_list} />
              </>
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}

function Nav({ children }) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}
function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i>
      Movie App
    </div>
  );
}
function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film Ara..." />
    </div>
  );
}
function NavSearhResult({ movies }) {
  return (
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> kayit bulundu
    </div>
  );
}
function Main({ children }) {
  return <main className="container">{children}</main>;
}
function ListContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

// function MyMovieListContainer() {
//   const [selected_movies, setSelected_Movies] = useState(selected_movie_list);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="movie-list">
//       <button
//         className="btn btn-sm btn-outline-primary mb-2"
//         onClick={() => setIsOpen2((val) => !val)}
//       >
//         {isOpen2 ? (
//           <i className="bi bi-chevron-up"></i>
//         ) : (
//           <i className="bi bi-chevron-down"></i>
//         )}
//       </button>

//       {isOpen2 && (
//         <>
//           <MyListSummary selected_movies={selected_movie_list} />
//           <MyMovieList selected_movies={selected_movie_list} />
//         </>
//       )}
//     </div>
//   );
// }
function MovieList({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 ">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.Id} />
      ))}
    </div>
  );
}
function Movie({ movie }) {
  return (
    <div className="col mb-2" key={movie.Id}>
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{movie.Title}</h6>
          <div>
            <i className="bi bi-calendar2-date me-2"></i>
            <span>{movie.Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function MyListSummary({ selected_movies }) {
  const avgRating = getAvarage(selected_movie_list.map((m) => m.rating));
  const avgDuration = getAvarage(selected_movie_list.map((m) => m.duration));
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>Listeye [{selected_movie_list.length}] film eklendi</h5>
        <div className="d-flex justify-content-between ">
          <p>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span>{avgRating.toFixed(2)}</span>
          </p>

          <p>
            <i className="bi bi-hourglass-split text-warning me-1"></i>
            <span>{avgDuration.toFixed(2)} dk</span>
          </p>
        </div>
      </div>
    </div>
  );
}
function MyMovieList({ selected_movies }) {
  return selected_movies.map((movie) => (
    <MyListMovie movie={movie} key={movie.Id} />
  ));
}
function MyListMovie({ movie }) {
  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-4">
          <img
            className="img-fluid rounded-start"
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.Title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.rating}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.duration} dk</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
