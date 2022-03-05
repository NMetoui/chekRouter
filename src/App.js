import "./App.css";
import { useState } from "react";
import React from "react";
import Home from "./Pages/Home/Home";
import MovieList from "./Pages/MovieList/MovieList";
import NavBar from "./component/NavBar/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Movie from "./Pages/Movie/Movie";

function App() {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 6990.201,
      poster_path:
        "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 5,
      vote_count: 8415,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      genre_ids: [16, 35, 10751, 14],
      id: 568124,
      original_language: "en",
      original_title: "Encanto",
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 3561.945,
      poster_path:
        "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      release_date: "2021-11-24",
      title: "Encanto",
      video: false,
      vote_average: 1,
      vote_count: 4723,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/6qkeXdIEwqOuOWuxsomwnin2RdD.jpg",
      genre_ids: [28, 12, 53, 10752],
      id: 476669,
      original_language: "en",
      original_title: "The King's Man",
      overview:
        "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
      popularity: 3095.477,
      poster_path:
        "https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
      release_date: "2021-12-22",
      title: "The King's Man",
      video: false,
      vote_average: 4,
      vote_count: 1442,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg",
      genre_ids: [27, 9648, 53],
      id: 646385,
      original_language: "en",
      original_title: "Scream",
      overview:
        "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
      popularity: 3118.542,
      poster_path:
        "https://image.tmdb.org/t/p/w500/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
      release_date: "2022-01-12",
      title: "Scream",
      video: false,
      vote_average: 2,
      vote_count: 679,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
      genre_ids: [16, 35, 12, 10751],
      id: 774825,
      original_language: "en",
      original_title: "The Ice Age Adventures of Buck Wild",
      overview:
        "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
      popularity: 2850.68,
      poster_path:
        "https://image.tmdb.org/t/p/w500/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
      release_date: "2022-01-28",
      title: "The Ice Age Adventures of Buck Wild",
      video: false,
      vote_average: 5,
      vote_count: 636,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/mqDnDhG5N6fn1H4MKQqr8E5wfeK.jpg",
      genre_ids: [80, 18, 53],
      id: 597208,
      original_language: "en",
      original_title: "Nightmare Alley",
      overview:
        "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
      popularity: 2463.42,
      poster_path:
        "https://image.tmdb.org/t/p/w500/680klE0dIreQQOyWKFgNnCAJtws.jpg",
      release_date: "2021-12-02",
      title: "Nightmare Alley",
      video: false,
      vote_average: 3,
      vote_count: 856,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/mruT954ve6P1zquaRs6XG0hA5k9.jpg",
      genre_ids: [53],
      id: 800510,
      original_language: "en",
      original_title: "Kimi",
      overview:
        "A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment.",
      popularity: 2445.81,
      poster_path:
        "https://image.tmdb.org/t/p/w500/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
      release_date: "2022-02-10",
      title: "Kimi",
      video: false,
      vote_average: 2,
      vote_count: 149,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
      genre_ids: [16, 10751, 14, 35, 12],
      id: 585083,
      original_language: "en",
      original_title: "Hotel Transylvania: Transformania",
      overview:
        "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
      popularity: 2027.509,
      poster_path:
        "https://image.tmdb.org/t/p/w500/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
      release_date: "2022-02-25",
      title: "Hotel Transylvania: Transformania",
      video: false,
      vote_average: 1,
      vote_count: 125,
    },

    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/kQM7o3NIkruIZLoQ9E2XzZQ8Ujl.jpg",
      genre_ids: [28, 35, 80, 10749, 53],
      id: 783461,
      original_language: "hi",
      original_title: "लूप लपेटा",
      overview:
        "When her boyfriend loses a mobster's cash, Savi races against the clock to save the day — if only she can break out of a curious cycle of dead ends.",
      popularity: 1792.362,
      poster_path:
        "https://image.tmdb.org/t/p/w500/mtLk7vugGWtMkO913Fg8zfM1YET.jpg",
      release_date: "2022-02-04",
      title: "Looop Lapeta",
      video: false,
      vote_average: 4,
      vote_count: 17,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
      genre_ids: [878, 28, 12],
      id: 580489,
      original_language: "en",
      original_title: "Venom: Let There Be Carnage",
      overview:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      popularity: 1218.026,
      poster_path:
        "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      release_date: "2021-09-30",
      title: "Venom: Let There Be Carnage",
      video: false,
      vote_average: 3,
      vote_count: 6435,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/8pgKccb5PfE1kWB9qqiXJem83VC.jpg",
      genre_ids: [28, 53],
      id: 522016,
      original_language: "en",
      original_title: "The 355",
      overview:
        "A group of top female agents from American, British, Chinese, Columbian and German  government agencies are drawn together to try and stop an organization from acquiring a deadly weapon to send the world into chaos.",
      popularity: 1171.012,
      poster_path:
        "https://image.tmdb.org/t/p/w500/uQt2dJFMnJmAp9zLAWNfGilK0BW.jpg",
      release_date: "2022-01-05",
      title: "The 355",
      video: false,
      vote_average: 5,
      vote_count: 274,
    },
  ]);
  const [searchCondition, setSearchCondition] = useState("");
  const [selectRating, setSelectRating] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          selectRating={selectRating}
          setSelectRating={setSelectRating}
          setSearchCondition={setSearchCondition}
          setMovies={setMovies}
          movies={movies}
        />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/MovieList"
              element={
                <MovieList
                  selectRating={selectRating}
                  movies={movies}
                  searchCondition={searchCondition}
                />
              }
            />
            <Route path="/MovieList/:id" element={<Movie movies={movies} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
