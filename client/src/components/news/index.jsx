import React from 'react'
import styles from "./news-public.module.scss"
import { useTranslation } from "react-i18next";
const News = () => {
    const{t} =useTranslation();
  return (
    <div>
        <div className={styles["new_header"]}>{t("new_header")}
        </div>
    </div>
  )
}

export default News;