import React from 'react';
import styles from "./category.module.scss";
import { useTranslation } from "react-i18next";
import {
  Link
} from "react-router-dom";


const Category = () => {
  const { t } = useTranslation();
  const categoryList = [
    {
      id: 1,
      name: "News",
      list: [{
        title: 'News Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'News Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'News Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'News Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'News Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'News Title 1',
        time: '1/9/2022',
        link: '/',
      },
      ],

    },
    {
      id: 1,
      name: "Notice",
      list: [{
        title: 'Notice Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'Notice Title 2',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'Notice Title 3',
        time: '1/9/2022',
        link: '/',
      },],

    },
    {
      id: 1,
      name: "UserManual",
      list: [{
        title: 'User Manual Title 1',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'User Manual Title 2',
        time: '1/9/2022',
        link: '/',
      },
      {
        title: 'User Manual Title 3',
        time: '1/9/2022',
        link: '/',
      },],

    },
  ]
  return (
    <div className={styles['category']}>
      <div className={styles['category_style']}>
        <div>{categoryList.map((item) => (
          <div className={styles['category_list']}>
            <div className={styles['category_name']}>{t(item.name)}</div>
            <div>{item.list.map((item) => (
              <div className={styles['category_content']}>
                <Link to={item.link} className={styles['category_title']}>{item.title}</Link>
                <div className={styles['category_time']}>{item.time}</div>
              </div>
            ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Category;