import React, { useEffect, useState } from "react";
import Header from "../components/Nav/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import detailStyle from "./scss/Details.module.scss";
import {
  BiCut,
  BiDislike,
  BiDotsHorizontalRounded,
  BiLike,
  BiShare,
} from "react-icons/bi";
import NonStickGenres from "../components/NonStickGenres";
import HorizontalCard from "../components/HorizontalCard";
import { keyAuthorization } from "../utils/constants";
import Comments from "../components/Comments";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../app/store/Actions/movieAction";

const Details = () => {
  const { t } = useTranslation();

  const params = useParams();

  const [movieInfo, setMovieInfo] = useState();

  const [channelInfo, setChannelInfo] = useState();

  const [page, setPage] = useState(1);

  const [videos, setVideos] = useState([]);

  const formatNum = (num) => {
    let finalNum;

    if (num < 1000) {
      return num;
    }

    if (num > 1000000) {
      if (!num % 1000000) {
        finalNum = Math.floor(num / 1000000);
        return finalNum + "M";
      } else {
        finalNum = (num / 1000000).toFixed(1);
        return finalNum + "M";
      }
    } else {
      finalNum = Math.floor(num / 1000);

      return finalNum + "K";
    }
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/videos",
      params: { part: "contentDetails,snippet,statistics", id: params.id },
      headers: {
        "X-RapidAPI-Key": keyAuthorization,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    })
      .then(async (res) => {
        await setMovieInfo(res.data);
        await axios({
          method: "GET",
          url: "https://youtube-v31.p.rapidapi.com/channels",
          params: {
            part: "snippet,statistics",
            id: res.data.items[0].snippet.channelId,
          },
          headers: {
            "X-RapidAPI-Key": keyAuthorization,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
          },
        })
          .then(async (res) => {
            await setChannelInfo(res.data);
          })
          .catch();
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchApiVideos = async () => {
      await axios({
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          relatedToVideoId: "7ghhRHRP6t4",
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
        headers: {
          "X-RapidAPI-Key": keyAuthorization,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      })
        .then((res) => {
          setVideos(videos.concat(res.data));
        })
        .catch((err) => console.log(err));
    };

    fetchApiVideos();
  }, [page]);

  const fetchData = () => {
    return setPage(page + 1);
  };

  useEffect(() => {
    window.scroll(0,0);
  }, []);

  console.log(page);

  return (
    <div>
      <Header></Header>

      <section className={`${detailStyle["watching-page"]}`}>
        <div className={`${detailStyle["film-details"]}`}>
          <iframe
            className={`${detailStyle["film-playing"]}`}
            src={`https://www.youtube.com/embed/${params.id}`}
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
          />
          <div className={`${detailStyle["film-title"]}`}>
            <h2>{movieInfo?.items[0].snippet.title}</h2>
            {/* <h2> JISOO - ‘꽃(FLOWER)’ DANCE PERFORMANCE VIDEO</h2> */}
          </div>
          <div className={`${detailStyle["details-middle"]}`}>
            <div className={`${detailStyle["details-left"]}`}>
              <div className={`${detailStyle["channel"]}`}>
                <div className={`${detailStyle["logo-channel"]}`}>
                  <img
                    src={channelInfo?.items[0].snippet.thumbnails.high.url}
                    // src="https://picsum.photos/300/300"
                    alt=""
                  />
                </div>
                <div className={`${detailStyle["channel-info"]}`}>
                  <h3 className={`${detailStyle["channel-name"]}`}>
                    {channelInfo?.items[0].snippet.title}
                    {/* BLACKPINK */}
                  </h3>
                  <h5 className={`${detailStyle["channel-subscribers"]}`}>
                    {formatNum(
                      channelInfo?.items[0].statistics.subscriberCount
                    )}
                    <span>{t("subscribers")}</span>
                  </h5>
                </div>
              </div>

              <div className={`${detailStyle["sub-btn"]}`}>
                <button>{t("subscribe")}</button>
              </div>
            </div>
            <div className={`${detailStyle["details-right"]}`}>
              <div className={`${detailStyle["like-dislike"]}`}>
                <button className={`${detailStyle["like-btn"]}`}>
                  <BiLike></BiLike>
                  <span>
                    {" "}
                    {formatNum(movieInfo?.items[0].statistics.likeCount)}
                  </span>
                </button>

                <button className={`${detailStyle["dislike-btn"]}`}>
                  <BiDislike></BiDislike>
                </button>
              </div>
              <div className={`${detailStyle["share-btn"]}`}>
                <button>
                  <BiShare className={`${detailStyle["share-icon"]}`}></BiShare>
                  <span>{t("share")}</span>
                </button>
              </div>

              <div className={`${detailStyle["cut-btn"]}`}>
                <button>
                  <BiCut />
                  <span>{t("clip")}</span>
                </button>
              </div>

              <div className={`${detailStyle["option-btn"]}`}>
                <button>
                  <BiDotsHorizontalRounded />
                </button>
              </div>
            </div>
          </div>

          <div className={`${detailStyle["film-description"]}`}>
            <div className={`${detailStyle["sum-description"]}`}>
              <span className={`${detailStyle["views"]}`}>
                {" "}
                1,5M {t("views")}{" "}
              </span>
              <span className={`${detailStyle["published"]}`}>
                {" "}
                1 {t("month")}{" "}
              </span>
              <span className={`${detailStyle["hashtag"]}`}>
                {" "}
                #IMC #Basketball{" "}
              </span>
            </div>
            <div className={`${detailStyle["description-area"]}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, corrupti. In quia doloremque magni earum at eligendi.
              Aut, eos veritatis.
            </div>
            <span className={`${detailStyle["show-more"]}`}>
              {t("show more")}
            </span>
          </div>

          <Comments />
        </div>
        <div className={`${detailStyle["suggest-video"]}`}>
          <NonStickGenres />
          <div className={`${detailStyle["suggested-videos"]}`}>
            <InfiniteScroll
              dataLength={2000}
              hasMore={true}
              inverse={true}
              next={fetchData}
              loader={
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Loading...
                </h3>
              }
            >
              {videos.map((page) => {
                return page.items.map((movie, index) => {
                  return <HorizontalCard data={movie.snippet} key={index} />;
                });
              })}
            </InfiniteScroll>

            {/* <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>;
            <HorizontalCard/>; */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
