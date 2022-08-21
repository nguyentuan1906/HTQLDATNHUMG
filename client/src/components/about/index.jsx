// rafce
import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "./about.module.scss"
const About = () => {
    const { t } = useTranslation();
    const team = [
        {
            name: t("teams.name1"),
            images: './images_about/test2_listen 5.png',
            post: t("teams.post1"),
            info: t("teams.info1")
        },
        {
            name: t("teams.name2"),
            images: './images_about/test2_listen 5.png',
            post: t("teams.post2"),
            info: t("teams.info2")
        },
        {
            name: t("teams.name3"),
            images: './images_about/test2_listen 5.png',
            post: t("teams.post3"),
            info: t("teams.info3")
        },
        {
            name: t("teams.name4"),
            images: './images_about/test2_listen 5.png',
            post: t("teams.post4"),
            info: t("teams.info4")
        },
        {
            name: t("teams.name5"),
            images: './images_about/test2_listen 5.png',
            post: t("teams.post5"),
            info: t("teams.info5")
        },


    ]
    return (
        <div className={styles["about"]} >
            <h1 className={styles["about_title"]}>{t('team')}</h1>
            <div className={styles["about_teams"]}>
                {team.map((a) => (
                    <div className={styles["about_Character"]}>
                        <div className={styles["images_Character"]}>
                            <img src={a.images} className={styles["about_images"]} alt="" />
                        </div>

                        <div className={styles["about_info_Character"]}>
                            <h2 className={styles["about_nameCharacter"]}>{a.name}</h2>
                            <p>{a.post}</p>
                            <p>{a.info} </p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default About
