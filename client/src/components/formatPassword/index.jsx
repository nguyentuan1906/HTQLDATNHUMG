import { t } from 'i18next'
import React from 'react'
import styles from "./formatPassword.module.scss"
const FormatPassword = () => {
    return (
        <div>
            <div className={styles['left']}>
                <h1>Please enter your email to reset your password</h1>
                <form className={styles['input']} action="">
                    <input className={styles['input_yourMail']} type="text" placeholder='Please enter your email' />
                    <button className={styles['send']}>SEND</button>
                </form>
            </div>
            <div className={styles['right']}>
                <img src="./images_about/tes2_listen 5. png" alt="images" />

            </div>
        </div>

    )
}

export default FormatPassword