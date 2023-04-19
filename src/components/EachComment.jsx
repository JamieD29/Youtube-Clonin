import React from "react";
import commentStyle from "./scss/Comments/EachComment.module.scss";
import {
    BiDislike,
    BiLike,
  } from "react-icons/bi";
import customerLogo from "../assets/img/customer-logo.png";
import { useTranslation } from "react-i18next";

const EachComment = () => {
  const {t} = useTranslation();
  return (
    <div className={`${commentStyle["each-comment-area"]}`}>
      <div className={`${commentStyle["logo-other-users"]}`}>
        <img src={customerLogo} alt="" />
      </div>
      <div className={`${commentStyle["comment-script"]}`}>
        <div className={`${commentStyle["channel-comment"]}`}>
          <h4>Youtube</h4>
          <span>1 {t('month')} </span>
        </div>
        <div className={`${commentStyle["comment-content"]}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate aut soluta autem voluptates rem aspernatur velit libero hic nemo!</p>
        </div>
        <div className={`${commentStyle["reply-comment"]}`}>
            <div className={`${commentStyle["like-reply"]}`}>
                <button><BiLike className={`${commentStyle["icon-reply"]}`}/></button>
                <span>15</span>
            </div>

            <div className={`${commentStyle["dislike-reply"]}`}>
                <button><BiDislike className={`${commentStyle["icon-reply"]}`}/></button>
            </div>

            <div className={`${commentStyle["reply"]}`}>
                <button>{t('reply')}</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default EachComment;
