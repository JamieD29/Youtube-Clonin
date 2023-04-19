import React, { useState, useRef, useCallback } from "react";
import MovieCard from "./MovieCard";
import listStyle from "./scss/MovieList/MovieList.module.scss";

import useMovies from "../utils/useMovies";

const MovieList = () => {
  //const movieList = useSelector(state=> state.movieReducer.movies);
  const [pageNum, setPageNum] = useState(1);

  const { isLoading, hasNextPage, results } =
    useMovies(pageNum);
  
  const intObserver = useRef();
  const lastPostRef = useCallback((movie) => {

    if(isLoading) return 

    if(intObserver.current) {
      
      intObserver.current.disconnect();

    };


    intObserver.current = new IntersectionObserver(results=>{
      console.log(results[0]);
      if(results[0].isIntersecting && hasNextPage){
        console.log('Near the end !!');
        setPageNum(prev => prev + 1);
      }
    })

    if(movie) intObserver.current.observe(movie)
    
  },[isLoading, hasNextPage]);


  const renderLoading = ()=>{
    return <>
        <div className={`${listStyle["loading-skeleton"]}`}>
            <div className={`${listStyle["loading-thumbnail"]}`}></div>
            <div className={`${listStyle["loading-container"]}`}>
              <div className={`${listStyle["loading-channel"]}`}></div>
              <div className={`${listStyle["loading-info"]}`}>
                  <div className={`${listStyle["title"]}`}></div>
                  <div className={`${listStyle["name"]}`}></div>
                  <div className={`${listStyle["views"]}`}></div>
              </div>
            </div>
          </div>
          <div className={`${listStyle["loading-skeleton"]}`}>
            <div className={`${listStyle["loading-thumbnail"]}`}></div>
            <div className={`${listStyle["loading-container"]}`}>
              <div className={`${listStyle["loading-channel"]}`}></div>
              <div className={`${listStyle["loading-info"]}`}>
                  <div className={`${listStyle["title"]}`}></div>
                  <div className={`${listStyle["name"]}`}></div>
                  <div className={`${listStyle["views"]}`}></div>
              </div>
            </div>
          </div>
          <div className={`${listStyle["loading-skeleton"]}`}>
            <div className={`${listStyle["loading-thumbnail"]}`}></div>
            <div className={`${listStyle["loading-container"]}`}>
              <div className={`${listStyle["loading-channel"]}`}></div>
              <div className={`${listStyle["loading-info"]}`}>
                  <div className={`${listStyle["title"]}`}></div>
                  <div className={`${listStyle["name"]}`}></div>
                  <div className={`${listStyle["views"]}`}></div>
              </div>
            </div>
          </div>
          <div className={`${listStyle["loading-skeleton"]}`}>
            <div className={`${listStyle["loading-thumbnail"]}`}></div>
            <div className={`${listStyle["loading-container"]}`}>
              <div className={`${listStyle["loading-channel"]}`}></div>
              <div className={`${listStyle["loading-info"]}`}>
                  <div className={`${listStyle["title"]}`}></div>
                  <div className={`${listStyle["name"]}`}></div>
                  <div className={`${listStyle["views"]}`}></div>
              </div>
            </div>
          </div>
          <div className={`${listStyle["loading-skeleton"]}`}>
            <div className={`${listStyle["loading-thumbnail"]}`}></div>
            <div className={`${listStyle["loading-container"]}`}>
              <div className={`${listStyle["loading-channel"]}`}></div>
              <div className={`${listStyle["loading-info"]}`}>
                  <div className={`${listStyle["title"]}`}></div>
                  <div className={`${listStyle["name"]}`}></div>
                  <div className={`${listStyle["views"]}`}></div>
              </div>
            </div>
          </div>
          <div className={`${listStyle["loading-skeleton"]}`}>
            <div className={`${listStyle["loading-thumbnail"]}`}></div>
            <div className={`${listStyle["loading-container"]}`}>
              <div className={`${listStyle["loading-channel"]}`}></div>
              <div className={`${listStyle["loading-info"]}`}>
                  <div className={`${listStyle["title"]}`}></div>
                  <div className={`${listStyle["name"]}`}></div>
                  <div className={`${listStyle["views"]}`}></div>
              </div>
            </div>
          </div>
    </>
  }

  return (
    <div className={`${listStyle["movie-list"]}`}>
      <div className={`${listStyle["container"]}`}>
        <div className={`${listStyle["list-video"]}`}>
          {results?.map((movies) => {
            let tempArr = [];
            tempArr = [...movies];
            return tempArr.map((movie, index) => {

              if (tempArr.length === index +1) {
                return <MovieCard ref={lastPostRef} key={movie.id} data={movie} />;
              } else {
                return <MovieCard key={movie.id} data={movie} />;
              }
            });
          })}

        

          {isLoading && renderLoading()}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
