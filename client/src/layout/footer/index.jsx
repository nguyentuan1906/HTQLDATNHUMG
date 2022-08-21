// rafce
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./footer-public.module.scss";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles["footer"]}>
        <div>{t("copy")}</div>
      </div>
    </div>
  );
};

export default Footer;
