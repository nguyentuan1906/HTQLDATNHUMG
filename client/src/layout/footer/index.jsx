// rafce
import React from 'react'
import styles from "./footer-public.module.scss"
const Footer = () => {
    const { t } = useTranslation();
  return (
    <div>
        <div className={styles["footer"]}>
           <p>Copyright © 2022 Trường Đại học Mỏ - Địa chất</p>
           {t('english')}
        
        </div>
    </div>
    
  )
}

export default Footer