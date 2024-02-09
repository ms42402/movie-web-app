package dev.mini.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService service;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(service.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getMovie(@PathVariable String imdbId){

        return new ResponseEntity<Optional<Movie>>(service.singleMovie(imdbId), HttpStatus.OK);

    }


    //around 1:06:00 in the video, he talks about how the api, repository, and database talk to each other

}
