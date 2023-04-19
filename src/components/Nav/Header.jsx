import React from "react";
import HeaderStyle from "./sass/Header.module.scss";
import logo from "./logo/logoytb.png";
import { RxHamburgerMenu, RxDotsVertical } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { TiMicrophone } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";



const Header = () => {

  const {t, i18n} = useTranslation();


  const onChange = (value) => {
    i18n.changeLanguage(value);
  
  };

 

  return (
    <div className={`${HeaderStyle["nav-cover"]} `}>
      <div id="start" className={`${HeaderStyle["nav-start"]}`}>
        <button className={`${HeaderStyle["nav-hamburger"]}`}>
          <RxHamburgerMenu />
        </button>

        <NavLink className={`${HeaderStyle["nav-logo-cover"]}`} to="/">
          <img
            className={`${HeaderStyle["nav-logo"]}`}
            src={logo}
            alt="Youtube"
          />
        </NavLink>
      </div>

      <div id="center" className={`${HeaderStyle["nav-center"]}`}>
        <div className={`${HeaderStyle["nav-search"]}`}>
          <form className={`${HeaderStyle["nav-input"]}`}>
            <input type="text" placeholder={t('search')} />
          </form>
          <button className={`${HeaderStyle["nav-btn-search"]}`}>
            <TfiSearch />
          </button>
        </div>

        <button className={`${HeaderStyle["nav-voice-input"]}`}>
          <TiMicrophone />
        </button>
      </div>

      <div id="end" className={`${HeaderStyle["nav-end"]}`}>
        
          <Select
            showSearch
            placeholder="Language"
            className={`${HeaderStyle["nav-option"]}`}
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
            
              {
                value: "vi",
                label: "Vietnamese",
              },
              {
                value: "en",
                label: "English",
              },
              {
                value: "chi",
                label: "Chinese",
              },
            ]}
          />
     

        <NavLink className={`${HeaderStyle["nav-sign-in"]}`}>
          <HiOutlineUserCircle />
          <span className={`${HeaderStyle["nav-signin-text"]}`}>{t('signin')}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
