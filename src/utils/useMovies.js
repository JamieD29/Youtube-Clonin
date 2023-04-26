   import  { useEffect, useState } from 'react'

import axios from 'axios';
import { keyAuthorization } from './constants';

const useMovies = (pageNum = 1) => {
  const [results, setResults]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);
  
    useEffect(()=>{
        setIsLoading(true)
        setIsError(false)
        setError({})
        axios({
          method: 'GET',
          url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
          params: {playlistId: 'RDZiQo7nAkQHU', part: 'snippet', maxResults: '50'},
          headers: {
            'X-RapidAPI-Key': keyAuthorization,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
          })
            .then(async (res) => {
            
                setResults((prevMovies) =>[...prevMovies, res.data.items])
                setHasNextPage(res.data.items.length > 0);
                setIsLoading(false)
                 //   dispatch({
            //     type: "FETCH_MOVIES",
            //     payload: res.data.items
            //   })
                

            })
            .catch((err) => {console.log(err); setError(err)});        
    }, [pageNum])

    return {isLoading, isError, error,hasNextPage, results}
}

export default useMovies