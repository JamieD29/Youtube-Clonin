import React from "react";
import commentsStyle from "./scss/Comments/Comments.module.scss";
import { MdSort } from "react-icons/md";
import customerLogo from '../assets/img/customer-logo.png'
import EachComment from "./EachComment";
import { useTranslation } from "react-i18next";
const Comments = () => {
  const {t} = useTranslation();
  return (
    <div className={`${commentsStyle["comments"]}`}>
      <div className={`${commentsStyle["comments-filter-n-action"]}`}>
        <div className={`${commentsStyle["comments-filter"]}`}>
          <span>13,172 {t('comments')}</span>
          <span>
            <MdSort className={`${commentsStyle["filter-icon"]}`}/> {t('sort')}
          </span>
        </div>

        <div className={`${commentsStyle["comments-action"]}`}>
          <div className={`${commentsStyle["cover-action"]}`}>
            <div className={`${commentsStyle["logo-user"]}`}>
              <img src={customerLogo} alt="" />
            </div>
            <div className={`${commentsStyle["input-action"]}`}>
              <input type="text" placeholder={t('add comment')} />
            </div>
          </div>
        </div>
      
      </div>

      <div className={`${commentsStyle["comments-area"]}`}>
        <EachComment/>
      </div>
    
    </div>

  );
};

export default Comments;
