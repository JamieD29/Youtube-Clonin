import React from "react";
import cardStyle from "./scss/MovieCard/MovieCard.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// const MovieCard = ({data}) => {
 
  
// };


const MovieCard = React.forwardRef(({data}, ref) =>{

  const {t} = useTranslation();

  

  const movieCard = (
    <NavLink className={`${cardStyle["movie-card"]}`} to={`/watch/${data.snippet.resourceId.videoId}`}
   
    >
      <div className={`${cardStyle["thumbnail"]}`}>
        <img
          className={`${cardStyle["thumbnail-img"]}`}
          src={data.snippet.thumbnails.standard.url} alt="Video thumbnail"
        />
        <div className={`${cardStyle["movie-range"]}`}>
          <span className={`${cardStyle["movie-text"]}`}>5:34</span>
        </div>
      </div>
      <div className={`${cardStyle["body"]}`}>
        <div className={`${cardStyle["logo-channel"]}`} key={data.snippet.videoOwnerChannelId}>
          <div className={`${cardStyle["logo-cover"]}`}>
            <img src={data.snippet.thumbnails.standard.url} alt="Video thumbnail" />
          </div>
        </div>
        <div className={`${cardStyle["movie-content"]}`}>
          <div className={`${cardStyle["movie-title"]}`}>
            {data.snippet.title}
          </div>
          <div className={`${cardStyle["movie-info"]}`}>
            <h2 className={`${cardStyle["channel-name"]}`}> {data.snippet.videoOwnerChannelTitle} </h2>
            <div className={`${cardStyle["movie-views-time"]}`}>
              <span>20K {t('views')}</span>
              <span style={{margin:"0 4px"}}>•</span>
              <span>15 {t('hour')}</span>
            </div>
          </div>
        </div>
        <div className={`${cardStyle["movie-menu"]}`}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className={`${cardStyle["movie-options"]}`}
            style={{
              pointerEvents: "none",
              display: "block",
            
            }}
          >
            <g className={`${cardStyle["movie-options"]}`}>
              <path
                fill="white"
                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                className={`${cardStyle["movie-options"]}`}
              />
            </g>
          </svg>
        </div>
      </div>
    </NavLink>
  );
  const content = ref ? <article ref={ref}>{movieCard}</article> : <article>{movieCard}</article>
  
  return content;
          
});



export default MovieCard;
