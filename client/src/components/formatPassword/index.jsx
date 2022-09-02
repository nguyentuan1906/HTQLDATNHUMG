import { t } from 'i18next'
import React from 'react'
import styles from "./formatPassword.module.scss"
import { useTranslation } from 'react-i18next';
const FormatPassword = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['formatP_content']} >
            <div className={styles['left']}>
                <h1>{t('title_fogetPassWord')}</h1>
                <form className={styles['input']} action="">
                    <input className={styles['input_yourMail']} type="text" placeholder={t('inputEmail')} />
                    <button className={styles['send']}>{t('botton_send')}</button>
                </form>
            </div>
            <div className={styles['right']}>
                <img className={styles['right_images']} src="./images_about/test2_listen 5.png" alt="images" />
            </div>
        </div>

    )
}

export default FormatPassword