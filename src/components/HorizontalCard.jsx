import React from "react";
import horizontalStyle from "./scss/MovieCard/HorizontalCard.module.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useTranslation } from "react-i18next";



const HorizontalCard = ({ data }) => {
  const {t} = useTranslation();
  return (
    <div className={`${horizontalStyle["suggest-card"]}`}>
      <div className={`${horizontalStyle["suggest-thumbnail"]}`}>
        <img
          //  src="https://picsum.photos/600/400"
          src={data.thumbnails.high.url}
          alt=""
        />
        <div className={`${horizontalStyle["suggest-range"]}`}>
          <span className={`${horizontalStyle["range-text"]}`}>29:09</span>
        </div>
      </div>
      <div className={`${horizontalStyle["suggest-body"]}`}>
        <div className={`${horizontalStyle["suggest-info"]}`}>
          <div className={`${horizontalStyle["suggest-title"]}`} >
            {data.title}
          {/* Infinite Scroll With API Call In React JS using
            react-infinite-scroll-component -NPM */}
          </div>
          <div className={`${horizontalStyle["s-video-info"]}`}>
            <h2 className={`${horizontalStyle["s-channel-name"]}`}>
              {data.channelTitle}
              {/* Bro Code  */}
            </h2>
            <div className={`${horizontalStyle["s-views-time"]}`}>
              <span>20K {t('views')}</span>
              <span style={{ margin: "0 4px" }}>•</span>
              <span>15 {t('hour')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${horizontalStyle["suggest-menu"]}`}>
        <BiDotsVerticalRounded className={`${horizontalStyle["menu-icon"]}`} />
      </div>
    </div>
  );
};

export default HorizontalCard;
