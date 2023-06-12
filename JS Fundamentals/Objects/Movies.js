function func(commands) {

  let movies = [];

  for (let command of commands) {
    
    if (command.includes("addMovie")) {

      let movieName = command.slice(9);

      movies.push({
        name: movieName
      })

    } else if (command.includes("directedBy")) {

      let movieData = command.split("directedBy");
      movieData[0] = movieData[0].trimEnd();
      movieData[1] = movieData[1].trimStart();

      for (let movie of movies) {
        if (movie.name == movieData[0]) {
          movie.director = movieData[1];
        };
      }

    } else { // onDate case

      let movieData = command.split("onDate");
      movieData[0] = movieData[0].trimEnd();
      movieData[1] = movieData[1].trimStart();

      for (let movie of movies) {
        if ((movie.name == movieData[0])) {
          movie.date = movieData[1];
        }
      }

    }
  }

  for (let movie of movies) {
    let properties = Object.keys(movie).length;

    if (properties == 3) {
      console.log(JSON.stringify(movie));
    }
  }

}

// "addMovie {movie name}" – add the movie

// · "{movie name} directedBy {director}" – check if the movie exists and then add the director

// · "{movie name} onDate {date}" – check if the movie exists and then add the date

func([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
