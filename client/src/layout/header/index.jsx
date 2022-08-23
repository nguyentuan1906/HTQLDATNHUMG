import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./header-public.module.scss"
import i18n from "i18next";
import Button from "../../components/common/button"
import {
  Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const navigate = useNavigate();
  const onLogin=()=>{
    navigate("/login")
  }
  const onContact=()=>{
    navigate("/contact")
  }
  const onAbout=()=>{
    navigate("/about")
  }
  return (
    <div className={styles["header"]}>
      <div className={styles["header<Link to="/" >{t('home')}</Link>__left"]}>
      
      </div>
      <div className={styles["header__center"]}></div>
      <div className={styles["header__right"]}>
        <Button text={t('login')} className={"button button-big"} onClick={onLogin}/>
        <Button text={t('contact')} className={"button button-big"} onClick={onContact}/>
        <Button text={t('about')} className={"button button-big"} onClick={onAbout}/>
      <select name="language" onChange={onChange}>
        <option value="en">{t('english')}</option>
        <option value="vn">{t("vietnamese")}</option>
      </select>
      </div>
    </div>
  )
}

export default Header