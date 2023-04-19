import React from "react";
import genresStyle from "./scss/Genres/Genres.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BtnGenres from "./BtnGenres";
import { useTranslation } from "react-i18next";


const Genres = () => {
  const {t, i18n} = useTranslation();
  const genresList = {
    genres: [
      t("music"),
      t("gamin"),
      t("news"),
      t("live"),
      t("esports"),
      t("animated films"),
      t("playlist"),
      "Lofi",
      "Kpop",
      "CSS",
      t("sneakers"),
      t("cartoon"),
      "Pop Rock",
      "HTML",
      "ReactJs",
  
    ],
  };
  return (
    <div className={`${genresStyle["genres"]}`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={12}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <SwiperSlide><BtnGenres name="Musics"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="Gaming"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="News"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="Sports"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="Sports"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="Sports"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="Sports"/></SwiperSlide>
      <SwiperSlide><BtnGenres name="Sports"/></SwiperSlide>   */}

        {genresList.genres.map((gener, index) => {
          return (
            <SwiperSlide key={gener + index} className={`${genresStyle["genre"]}`}>
              {" "}
              <BtnGenres name={gener} />{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Genres;
