// rafce
import React from 'react'
import Images from './images_about/test2_listen 5.png'
import styles from "./about.module.scss"
const team=[
    {
        name:'Minh',
        images:'./images_about/test2_listen 5.png',
        post:'member',
        info:'Chuyên ngành Mạng máy tính K64,'
    },
    {
        name:'Minh',
        images:'./images_about/test2_listen 5.png',
        post:'member',
        info:'Chuyên ngành Mạng máy tính K64,'
    }, 
    {
        name:'Minh',
        images:'./images_about/test2_listen 5.png',
        post:'member',
        info:'Chuyên ngành Mạng máy tính K64,'
    },

]
const About = () => {
  return (
    <div className={styles["about"]} >
        <h1 className={styles["about_title"]}>Meet our team</h1>
        {team.map((a)=>(
        <div className={styles["about_Character"]}>
            <div className={styles["images_Character"]}>
            <img src={a.images} className={styles["about_images"]} alt=""/>
            </div>

            <div className={styles["about_info_Character"]}>
            <h2 className={styles["about_nameCharacter"]}>{a.name}</h2>
            <p>{a.post}</p>
            <p>{a.info} </p>
            </div>
            
        </div>
        ))}

    </div>
  )
}

export default About
