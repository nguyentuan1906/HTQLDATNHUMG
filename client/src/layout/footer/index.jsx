// rafce
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./footer-public.module.scss";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        
      </div>
      
      <div className={styles["footer"]}>
        <div className={styles["copy"]}>{t("copy")}</div>
        <div className={styles["nhom"]}>{t("nhom")}</div>
      </div>
    </div>
  );
};

export default Footer;
