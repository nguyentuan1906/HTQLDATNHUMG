import React from 'react'
import styles from "./login.module.scss"
import { useTranslation } from 'react-i18next';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onLogin = () => {
     toast("Đăng nhập thành công! ");
     navigate("/");
  }
  return (
    <div className={styles["login_logout"]}>
      <div className={styles["login_left"]}>
        <h1 className={styles["login_h1"]}> {t('signin')}</h1>
        <form className={styles["login"]}>
          <input className={styles["Login_acountName"]} type="text" placeholder={t('acountName')} />
          <input className={styles["login_password"]} type="password" placeholder={t('password')} />
          <a className={styles[""]} href="/format-password"><p >{t('forgotPassword')}</p></a>
          <button className={styles["submit_button"]} onClick={onLogin}>{t('signin')}</button>
          
        </form>
        
      </div>
      <div className={styles["login_right"]}>
        <img className={styles["login_right_image"]} src="./images_about/test2_listen 5.png" alt="images" />
        


      </div>
      <div>
        <div>02/09</div>
        <div>2022</div>
      </div>
      


    </div>

  )
}


export default Login