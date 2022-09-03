import React from "react";
import styles from "./notice-public.module.scss";
import { useTranslation } from "react-i18next";
const Notice = () => {
  const { t } = useTranslation();
  const listNotice = [
    {
      id: 1,
      name: "a",
      link: "/",
    },
    {
      id: 2,
      name: "a",
      link: "/",
    },
    {
      id: 3,
      name: "a",
      link: "/",
    },
    {
      id: 4,
      name:"a" ,
      link: "/",
    },
    {
      id: 5,
      name: "a",
      link: "/",
    },
    {
      id: 6,
      name: "a",
      link: "/",
    },

  ]
  return (
    <div>
      <div className={styles["notice_header"]}>{t("notice_header")}</div>
      <div className={styles["f_notice"]}>{listNotice.map((item) => (
         <div className={styles["f1_notice"]}>{item.name}</div>
      ))}
    </div>
    </div>
  );
};

export default Notice;